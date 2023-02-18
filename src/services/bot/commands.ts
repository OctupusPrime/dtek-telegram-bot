import { Composer, Scenes } from "telegraf";

const commandsHandler = new Composer<Scenes.WizardContext>();

commandsHandler.command("create", (ctx) =>
  ctx.scene.enter("ADD_ADDRESS_WIZARD")
);

export default commandsHandler;
