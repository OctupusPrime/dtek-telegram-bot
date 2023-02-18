import * as dotenv from "dotenv";
dotenv.config();
import { env } from "@utils/config";

import { db } from "@lib/db";
import { bot } from "@lib/telegram";
import { getData } from "@lib/api";
import { generateButtonsRow, getActionVariables } from "@utils/telegram";
import { getStreetsStartWithNum, getStreetsStartWithStr } from "@utils/data";

import { message } from "telegraf/filters";
import { Scenes, session } from "telegraf";
import addAddressWizard from "@services/bot/scenes/addAddressWizard";

//@ts-ignore
// bot.command("create", Scenes.Stage.enter("ADD_ADDRESS_WIZARD"));

bot.action(/^.*\bcreate\b.*/, (ctx) => {
  const {
    update: { callback_query },
    match,
  } = ctx;
  const { from } = callback_query;
  console.log("action");
  console.log(ctx);

  const [type] = getActionVariables(match[0]);
  console.log(match);

  if (type === "num") {
    const numSteetsArr = Object.keys(getStreetsStartWithNum());

    ctx.editMessageText("Оберіть номер вулиці.\n\nПриклад:\n5-а Лінія - 5-a", {
      reply_markup: {
        inline_keyboard: generateButtonsRow(numSteetsArr, match[0], 5),
      },
    });
    return;
  }

  if (type === "char") {
    const charStreetsArr = Object.keys(getStreetsStartWithStr());

    ctx.editMessageText(
      "Оберіть першу літеру вулиці.\n\nПриклад:\nДальня вул. - Д",
      {
        reply_markup: {
          inline_keyboard: generateButtonsRow(charStreetsArr, match[0], 5),
        },
      }
    );
    return;
  }
});

const stage = new Scenes.Stage<Scenes.WizardContext>([addAddressWizard], {
  default: "ADD_ADDRESS_WIZARD",
});
bot.use(session());
bot.use(stage.middleware());
bot.launch();

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
