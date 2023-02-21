import { addAddress, deleteAddress } from "@services/db";
import { getStreetsStartWithNum, getStreetsStartWithStr } from "@utils/data";
import { generateButtonsRow, getActionVariables } from "@utils/telegraf";
import { Composer } from "telegraf";

import messages from "@data/messages.json";
import { getShutdownsHouseInfo, getShutdownsListInfo } from "@services/api";

const actionHandler = new Composer();

actionHandler.action(/^.*\a\b.*/, async (ctx) => {
  const {
    update: { callback_query },
    match,
  } = ctx;
  const { from } = callback_query;

  const actionState = match[0];
  const [name, type, startWith, street, house] =
    getActionVariables(actionState);

  const parsedStreet = street
    ? type === "n"
      ? getStreetsStartWithNum()[startWith][+street]
      : getStreetsStartWithStr()[startWith][+street]
    : undefined;

  if (house) {
    const [addData, addErr] = await addAddress({
      user_id: from.id,
      house,
      street: parsedStreet as string,
      name,
    });

    if (addErr || !addData) {
      await ctx.editMessageText(messages["errors"]["db"]["add"]);

      return;
    }

    await ctx.editMessageText(messages["add-new-address"]["success"]);

    return;
  }

  if (parsedStreet) {
    const [apiData, apiErr] = await getShutdownsListInfo({
      street: parsedStreet,
    });

    if (apiErr || !apiData) {
      await ctx.editMessageText(messages["errors"]["api"], {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Повторити",
                callback_data: actionState,
              },
            ],
          ],
        },
      });

      return;
    }

    const dataArr = Object.keys(apiData).sort();

    await ctx.editMessageText(messages["add-new-address"]["house"], {
      reply_markup: {
        inline_keyboard: generateButtonsRow(dataArr, actionState, 4),
      },
    });

    return;
  }

  if (type === "n") {
    const addressesStartNum = getStreetsStartWithNum();

    if (startWith) {
      const parsedStreetArr = addressesStartNum[startWith].map((el, index) => ({
        label: el,
        value: index + "",
      }));

      ctx.editMessageText(messages["add-new-address"]["street-name"], {
        reply_markup: {
          inline_keyboard: generateButtonsRow(parsedStreetArr, actionState, 1),
        },
      });
      return;
    }

    const numSteetsArr = Object.keys(addressesStartNum);

    ctx.editMessageText(messages["add-new-address"]["street-type-num"], {
      reply_markup: {
        inline_keyboard: generateButtonsRow(numSteetsArr, actionState, 5),
      },
    });
    return;
  }

  const addressesStartStr = getStreetsStartWithStr();

  if (startWith) {
    const parsedStreetArr = addressesStartStr[startWith].map((el, index) => ({
      label: el,
      value: index + "",
    }));

    ctx.editMessageText(messages["add-new-address"]["street-name"], {
      reply_markup: {
        inline_keyboard: generateButtonsRow(parsedStreetArr, actionState, 1),
      },
    });
    return;
  }

  const charStreetsArr = Object.keys(addressesStartStr);

  ctx.editMessageText(messages["add-new-address"]["street-type-char"], {
    reply_markup: {
      inline_keyboard: generateButtonsRow(charStreetsArr, actionState, 5),
    },
  });
  return;
});

actionHandler.action(/^.*d.*$/, async (ctx) => {
  const { match } = ctx;

  const actionState = match[0];
  const [, id] = getActionVariables(actionState);

  const [deleteData, deleteErr] = await deleteAddress(+id);

  if (deleteErr || !deleteData) {
    await ctx.editMessageText(messages["errors"]["db"]["delete"]);

    return;
  }

  await ctx.editMessageText(messages["delete"]["success"]);
  return;
});

actionHandler.action(/^.*c.*$/, async (ctx) => {
  const { match } = ctx;

  const actionState = match[0];
  const [, street, house] = getActionVariables(actionState);

  const [data, err] = await getShutdownsHouseInfo({ street, house });

  if (err || !data) {
    await ctx.editMessageText(messages["errors"]["api"]);

    return;
  }

  if (data.sub_type) {
    await ctx.editMessageText(
      `За вашою адрессою в даний момент вiдсутня електроенергiя\nПричина: *${data.start_date}*\nЧас початку - *${data.start_date}*\nОрієнтовний час вiдновлення - *до ${data.end_date}*`,
      {
        parse_mode: "Markdown",
      }
    );

    return;
  }

  await ctx.editMessageText(messages["check"]["generic"], {
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
});

export default actionHandler;
