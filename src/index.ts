import { bot, sendToChannel } from "./bot";
import { startCron } from "./cron";
import dotenv from "dotenv";
dotenv.config();

async function bootstrap() {
  try {
    await bot.launch();
    console.log("запущен!");
    await sendToChannel("Тест: бот");
    startCron();
  } catch (err) {
    console.error("error:", err);
  }
}

bootstrap();

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
