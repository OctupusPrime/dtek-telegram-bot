import * as dotenv from "dotenv";
dotenv.config();
import { env } from "@utils/config";

import { message } from "telegraf/filters";

import { db } from "@lib/db";
import { bot } from "@lib/telegram";
import { getData } from "@lib/api";

bot.on(message("text"), async (ctx) => {
  const { from } = ctx;

  const user = await db
    .selectFrom("users")
    .where("id", "=", from.id)
    .selectAll()
    .executeTakeFirst();

  if (user) {
    const data = await getData({
      city: user.city,
      street: user.street + "",
      house: user.house + "",
    });

    console.log(data);
    ctx.reply(JSON.stringify(data, null, 2));
  } else ctx.reply("hello");
});

bot.launch();

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
