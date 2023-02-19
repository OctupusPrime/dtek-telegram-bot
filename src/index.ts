import * as dotenv from "dotenv";
import { checkConfig } from "./config";
dotenv.config();
checkConfig();

import { bot } from "@lib/telegraf";
import telegrafThrottler from "telegraf-throttler";

import { Scenes, session } from "telegraf";
import { addAddressWizard } from "@services/bot/scenes";

import actionHandler from "@services/bot/actions";
import commandsHandler from "@services/bot/commands";

const throttler = telegrafThrottler({
  inThrottlerError: async (ctx) => {
    ctx.reply("I am throttled");
  },
});

bot.use(throttler);

const stage = new Scenes.Stage<Scenes.WizardContext>([addAddressWizard]);

bot.use(session());
bot.use(stage.middleware());

bot.use(commandsHandler);
bot.use(actionHandler);

bot.launch();

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
