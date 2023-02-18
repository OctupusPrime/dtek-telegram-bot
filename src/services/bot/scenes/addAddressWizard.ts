import messages from "@data/messages";
import { Scenes } from "telegraf";

const addAddressWizard: Scenes.WizardScene<
  Scenes.WizardContext<Scenes.WizardSessionData>
> = new Scenes.WizardScene(
  "ADD_ADDRESS_WIZARD",
  async (ctx) => {
    ctx.reply(messages["add-new-address"]["name"]);
    return ctx.wizard.next();
  },
  async (ctx) => {
    ctx.reply(messages["add-new-address"]["street-type"], {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Цифра", callback_data: "create&num" },
            { text: "Літера", callback_data: "create&char" },
          ],
        ],
      },
    });
    return ctx.scene.leave();
  }
);

export default addAddressWizard;
