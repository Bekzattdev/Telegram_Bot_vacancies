import { bot } from "./bot";
import { sendToChannel } from "./bot";

(async () => {
  await bot.launch();
  await sendToChannel("🔥 Тестовое сообщение вручную!");
  console.log("✅ Отправлено!");
})();
