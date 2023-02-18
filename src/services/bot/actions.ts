import { getStreetsStartWithNum, getStreetsStartWithStr } from "@utils/data";
import { generateButtonsRow, getActionVariables } from "@utils/telegraf";
import { Composer } from "telegraf";

const actionHandler = new Composer();

actionHandler.action(/^.*\bcreate\b.*/, (ctx) => {
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

export default actionHandler;
