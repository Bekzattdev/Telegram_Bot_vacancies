import { Telegraf, Context } from "telegraf";
import dotenv from "dotenv";
dotenv.config();

export const bot: Telegraf<Context> = new Telegraf(process.env.BOT_TOKEN!);

export async function sendToChannel(text: string) {
  if (!process.env.CHANNEL_ID) throw new Error("CHANNEL_ID не задан!");
  await bot.telegram.sendMessage(process.env.CHANNEL_ID, text, { parse_mode: "HTML" });
}

export async function publishJob(title: string, link: string) {
  await bot.telegram.sendMessage(
    process.env.CHANNEL_ID!,
    `💼 <b>${title}</b>\n🔗 ${link}`,
    { parse_mode: "HTML" }
  );
}
