import * as dotenv from "dotenv";
dotenv.config();
import { env } from "@utils/config";

import { bot } from "@lib/telegraf";

import { Scenes, session } from "telegraf";
import addAddressWizard from "@services/bot/scenes/addAddressWizard";

import actionHandler from "@services/bot/actions";
import commandsHandler from "@services/bot/commands";

bot.use(actionHandler);
bot.use(commandsHandler);

const stage = new Scenes.Stage<Scenes.WizardContext>([addAddressWizard]);
bot.use(session());
bot.use(stage.middleware());
bot.launch();

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
