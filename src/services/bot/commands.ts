import { deleteAddress, getAllAddresses } from "@services/db";
import { Composer, Scenes } from "telegraf";

import messages from "@data/messages.json";
import { generateButtonsRow } from "@utils/telegraf";
import { getShutdownsHouseInfo } from "@services/api";

const addressesLimit = process.env.ADDRESSES_LIMIT
  ? +process.env.ADDRESSES_LIMIT
  : 4;

const commandsHandler = new Composer<Scenes.WizardContext>();

commandsHandler.command("start", (ctx) =>
  ctx.reply(messages["about"], {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Офіційний сайт",
            url: "https://www.dtek-oem.com.ua/ua",
          },
        ],
        [
          {
            text: "Sourse code",
            url: "https://github.com/OctupusPrime/dtek-telegram-bot",
          },
        ],
      ],
    },
  })
);

commandsHandler.command("add", (ctx) => ctx.scene.enter("ADD_ADDRESS_WIZARD"));

commandsHandler.command("delete", async (ctx) => {
  const { from } = ctx.update.message;

  const [data, err] = await getAllAddresses(from.id);

  if (err || !data) {
    await ctx.reply(messages["errors"]["db"]["get"]);

    return;
  }

  if (!data.length) {
    await ctx.reply(messages["list"]["empty"]);

    return;
  }

  if (data.length === 1) {
    const [deleteData, deleteErr] = await deleteAddress(data[0].id);

    if (deleteErr || !deleteData) {
      await ctx.reply(messages["errors"]["db"]["delete"]);

      return;
    }

    await ctx.reply(messages["delete"]["success"]);
    return;
  }

  const addressList = data.map((el) => ({
    label: el.name,
    value: el.id + "",
  }));

  await ctx.reply(messages["delete"]["list"], {
    reply_markup: {
      inline_keyboard: generateButtonsRow(addressList, "d&", 2),
    },
  });

  return;
});

commandsHandler.command("list", async (ctx) => {
  const { from } = ctx.update.message;

  const [data, err] = await getAllAddresses(from.id);

  if (err || !data) {
    await ctx.reply(messages["errors"]["db"]["get"]);

    return;
  }

  if (!data.length) {
    await ctx.reply(messages["list"]["empty"]);

    return;
  }

  await ctx.reply(
    `Список адреc (${data.length}/${addressesLimit}):\nУ форматі (назва · вулиця · дiм)`
  );

  for (const address of data) {
    await ctx.reply(
      address.name + "\n" + address.street + "\n" + address.house
    );
  }
  return;
});

commandsHandler.command("check", async (ctx) => {
  const { from } = ctx.update.message;

  const [userData, userErr] = await getAllAddresses(from.id);

  if (userErr || !userData) {
    await ctx.reply(messages["errors"]["db"]["get"]);

    return;
  }

  if (!userData.length) {
    await ctx.reply(messages["list"]["empty"]);

    return;
  }

  if (userData.length === 1) {
    const [data, err] = await getShutdownsHouseInfo({ ...userData[0] });

    if (err || !data) {
      await ctx.reply(messages["errors"]["api"]);

      return;
    }

    if (data.sub_type) {
      await ctx.reply(
        `За вашою адрессою в даний момент вiдсутня електроенергiя\nПричина: *${data.start_date}*\nЧас початку - *${data.start_date}*\nОрієнтовний час вiдновлення - *до ${data.end_date}*`,
        {
          parse_mode: "Markdown",
        }
      );

      return;
    }

    await ctx.reply(messages["check"]["generic"], {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Форма",
              url: "https://www.dtek-oem.com.ua/ua/shutdowns",
            },
          ],
        ],
      },
    });

    return;
  }

  const addressList = userData.map((el) => ({
    label: el.name,
    value: el.street + "," + el.house,
  }));

  await ctx.reply(messages["check"]["list"], {
    reply_markup: {
      inline_keyboard: generateButtonsRow(addressList, "c&", 2),
    },
  });

  return;
});

commandsHandler.command("help", (ctx) =>
  ctx.reply(messages["help"]["message"])
);

export default commandsHandler;
