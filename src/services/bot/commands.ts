import { deleteAddress, getAllAddresses } from "@services/db";
import { Composer, Scenes } from "telegraf";

import messages from "@data/messages.json";
import { generateButtonsRow } from "@utils/telegraf";
import { getShutdownsHouseInfo } from "@services/api";

const commandsHandler = new Composer<Scenes.WizardContext>();

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
      inline_keyboard: generateButtonsRow(addressList, "delete&", 2),
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

  await ctx.reply(messages["list"]["success"]);

  for (const address of data) {
    await ctx.reply(
      "Назва: " +
        address.name +
        "\nВулиця: " +
        address.street +
        "\nДiм: " +
        address.house
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
      await ctx.editMessageText(messages["errors"]["api"]);

      return;
    }

    await ctx.reply(JSON.stringify(data, null, 2));

    return;
  }

  const addressList = userData.map((el) => ({
    label: el.name,
    value: el.street + "," + el.house,
  }));

  await ctx.reply(messages["check"]["list"], {
    reply_markup: {
      inline_keyboard: generateButtonsRow(addressList, "check&", 2),
    },
  });

  return;
});

export default commandsHandler;
