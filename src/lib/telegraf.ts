import { Scenes, Telegraf } from "telegraf";

const bot = new Telegraf<Scenes.WizardContext>(process.env.BOT_TOKEN as string);

export { bot };
