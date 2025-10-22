// import cron from "node-cron";
// import { sendToChannel } from "./bot";
// import { fetchDevKgVacancies } from "./parsers/devs";

// let lastSentLinks: string[] = [];

// export function startCron() {
//   cron.schedule("*/10 * * * *", async () => {
//     console.log("Проверка DevKG...");
//     const vacancies = await fetchDevKgVacancies();

//     for (const vacancy of vacancies) {
//       if (!lastSentLinks.includes(vacancy.link)) {
//         const message = `<b>${vacancy.title}</b>\n${vacancy.company}\n<a href="${vacancy.link}">Подробнее</a>`;
//         await sendToChannel(message);
//         lastSentLinks.push(vacancy.link);
//       }
//     }
//     if (lastSentLinks.length > 100) lastSentLinks = lastSentLinks.slice(-50);
//   });

//   console.log("Автопубликация запущена!");
// }

import cron from "node-cron";
import { sendToChannel } from "./bot";
import { fetchDevKgVacancies } from "./parsers/devs";
let lastSentLinks: string[] = [];
export function startCron() {
cron.schedule("*/10 * * * *", async () => {
  console.log("🔄 Проверка новых вакансий DevKG...");
  const vacancies = await fetchDevKgVacancies();
  console.log(`🧩 Найдено ${vacancies.length} вакансий`);

  for (const vacancy of vacancies) {
    console.log("Проверяем:", vacancy.title);

    if (!lastSentLinks.includes(vacancy.link)) {
      console.log("🟢 Новая вакансия:", vacancy.title);
      try {
        const message = `<b>${vacancy.title}</b>\n${vacancy.company}\n<a href="${vacancy.link}">Подробнее</a>`;
        await sendToChannel(message);
        console.log("✅ Отправлено:", vacancy.title);
      } catch (err) {
        console.error("❌ Ошибка при отправке:", err);
      }
      lastSentLinks.push(vacancy.link);
    }
  }
})}