import { deleteAddress, getAllAddresses } from "@services/db";
import { Composer, Scenes } from "telegraf";

import messages from "@data/messages.json";
import { generateButtonsRow } from "@utils/telegraf";

const commandsHandler = new Composer<Scenes.WizardContext>();

commandsHandler.command("add", (ctx) => ctx.scene.enter("ADD_ADDRESS_WIZARD"));

commandsHandler.command("test", (ctx) => {
  const { from } = ctx.update.message;
});

commandsHandler.command("delete", async (ctx) => {
  const { from } = ctx.update.message;

  const [data, err] = await getAllAddresses(from.id);

  if (err || !data) {
    await ctx.reply(messages["db"]["get"]);

    return;
  }

  if (!data.length) {
    await ctx.reply(messages["delete"]["empty"]);

    return;
  }

  if (data.length === 1) {
    const [deleteData, deleteErr] = await deleteAddress(data[0].id);

    if (deleteErr || !deleteData) {
      await ctx.reply(messages["db"]["delete"]);

      return;
    }

    await ctx.reply(messages["delete"]["success"]);
    return;
  }

  const addressList = data.map((el) => ({
    label: el.name,
    value: el.id + "",
  }));

  await ctx.reply(messages["delete"]["name"], {
    reply_markup: {
      inline_keyboard: generateButtonsRow(addressList, "delete&", 2),
    },
  });

  return;
});

export default commandsHandler;
