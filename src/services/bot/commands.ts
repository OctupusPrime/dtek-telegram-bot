import { Composer, Scenes } from "telegraf";

const commandsHandler = new Composer<Scenes.WizardContext>();

commandsHandler.command("add", (ctx) => ctx.scene.enter("ADD_ADDRESS_WIZARD"));

commandsHandler.command("test", (ctx) => {
  console.log(JSON.stringify(ctx));
});

export default commandsHandler;
