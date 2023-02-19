import { Composer, Scenes } from "telegraf";

const commandsHandler = new Composer<Scenes.WizardContext>();

commandsHandler.command("create", (ctx) =>
  ctx.scene.enter("ADD_ADDRESS_WIZARD")
);

commandsHandler.command("help", (ctx) => {
  console.log("help");

  console.log(JSON.stringify(ctx.update.message, null, 2));
});

export default commandsHandler;
