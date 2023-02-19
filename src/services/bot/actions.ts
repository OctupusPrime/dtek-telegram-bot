import { addAddress, deleteAddress } from "@services/db";
import { getStreetsStartWithNum, getStreetsStartWithStr } from "@utils/data";
import {
  generateButtonsRow,
  generateRepeatButton,
  getActionVariables,
} from "@utils/telegraf";
import { Composer } from "telegraf";

import messages from "@data/messages.json";
import { getShutdownsListInfo } from "@services/api";

const actionHandler = new Composer();

actionHandler.action(/^.*\add\b.*/, async (ctx) => {
  const {
    update: { callback_query },
    match,
  } = ctx;
  const { from } = callback_query;

  const actionState = match[0];
  const [name, type, startWith, street, house] =
    getActionVariables(actionState);

  if (house) {
    const [addData, addErr] = await addAddress({
      user_id: from.id,
      house,
      street,
      name,
    });

    if (addErr || !addData) {
      await ctx.editMessageText(messages["errors"]["db"]["add"]);

      return;
    }

    await ctx.editMessageText(messages["add-new-address"]["success"]);

    return;
  }

  if (street) {
    const [data, err] = await getShutdownsListInfo({ street });

    if (err || !data) {
      await ctx.editMessageText(messages["errors"]["api"], {
        reply_markup: {
          inline_keyboard: [generateRepeatButton(actionState)],
        },
      });

      return;
    }

    const dataArr = Object.keys(data).sort();

    await ctx.editMessageText(messages["add-new-address"]["house"], {
      reply_markup: {
        inline_keyboard: generateButtonsRow(dataArr, actionState, 4),
      },
    });

    return;
  }

  if (type === "num") {
    const addressesStartNum = getStreetsStartWithNum();

    if (startWith) {
      const dataArr = addressesStartNum[startWith];

      ctx.editMessageText(messages["add-new-address"]["street-name"], {
        reply_markup: {
          inline_keyboard: generateButtonsRow(dataArr, actionState, 1),
        },
      });
      return;
    }

    const numSteetsArr = Object.keys(addressesStartNum);

    ctx.editMessageText(messages["add-new-address"]["street-type-num"], {
      reply_markup: {
        inline_keyboard: generateButtonsRow(numSteetsArr, actionState, 5),
      },
    });
    return;
  }

  if (type === "char") {
    const addressesStartStr = getStreetsStartWithStr();

    if (startWith) {
      const dataArr = addressesStartStr[startWith];

      ctx.editMessageText(messages["add-new-address"]["street-name"], {
        reply_markup: {
          inline_keyboard: generateButtonsRow(dataArr, actionState, 1),
        },
      });
      return;
    }

    const charStreetsArr = Object.keys(addressesStartStr);

    ctx.editMessageText(messages["add-new-address"]["street-type-char"], {
      reply_markup: {
        inline_keyboard: generateButtonsRow(charStreetsArr, actionState, 5),
      },
    });
    return;
  }
});

actionHandler.action(/^.*delete.*$/, async (ctx) => {
  const { match } = ctx;

  const actionState = match[0];
  const [, id] = getActionVariables(actionState);

  const [deleteData, deleteErr] = await deleteAddress(+id);

  if (deleteErr || !deleteData) {
    await ctx.editMessageText(messages["errors"]["db"]["delete"]);

    return;
  }

  await ctx.editMessageText(messages["delete"]["success"]);
  return;
});

export default actionHandler;
