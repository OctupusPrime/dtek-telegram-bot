import messages from "@data/messages.json";
import { getAllAddresses } from "@services/db";
import { Scenes } from "telegraf";

const addressesLimit = process.env.ADDRESSES_LIMIT
  ? +process.env.ADDRESSES_LIMIT
  : 4;

const addAddressWizard: Scenes.WizardScene<
  Scenes.WizardContext<Scenes.WizardSessionData>
> = new Scenes.WizardScene(
  "ADD_ADDRESS_WIZARD",
  async (ctx) => {
    const { message } = ctx;

    if (!message) return;

    const [data, err] = await getAllAddresses(message.from.id);

    if (err || !data) {
      await ctx.reply(messages["db"]["get"]);

      return ctx.scene.leave();
    }

    if (data.length >= addressesLimit) {
      await ctx.reply(messages["add-new-address"]["limit"]);

      return ctx.scene.leave();
    }

    //@ts-ignore state is object type
    ctx.wizard.state.data = data;

    await ctx.reply(messages["add-new-address"]["name"]);
    return ctx.wizard.next();
  },
  async (ctx) => {
    const { message } = ctx;

    if (!message) return;

    //@ts-ignore state is object type
    const { data } = ctx.wizard.state;
    //@ts-ignore bcs text is not in types
    const name = message.text?.trim();

    if (!name || !name?.length) {
      await ctx.reply(messages["add-new-address"]["name-error-length"]);
      return;
    }

    if (data.some((el: any) => el.name === name)) {
      await ctx.reply(messages["add-new-address"]["name-error-unique"]);
      return;
    }

    await ctx.reply(messages["add-new-address"]["street-type"], {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Цифра", callback_data: `add&${name},num` },
            { text: "Літера", callback_data: `add&${name},char` },
          ],
        ],
      },
    });
    return ctx.scene.leave();
  }
);

export default addAddressWizard;
