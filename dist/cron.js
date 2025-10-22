"use strict";
// import cron from "node-cron";
// import { sendToChannel } from "./bot";
// import { fetchDevKgVacancies } from "./parsers/devs";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startCron = startCron;
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
const node_cron_1 = __importDefault(require("node-cron"));
const bot_1 = require("./bot");
const devs_1 = require("./parsers/devs");
let lastSentLinks = [];
function startCron() {
    node_cron_1.default.schedule("*/10 * * * *", async () => {
        console.log("🔄 Проверка новых вакансий DevKG...");
        const vacancies = await (0, devs_1.fetchDevKgVacancies)();
        console.log(`🧩 Найдено ${vacancies.length} вакансий`);
        for (const vacancy of vacancies) {
            console.log("Проверяем:", vacancy.title);
            if (!lastSentLinks.includes(vacancy.link)) {
                console.log("🟢 Новая вакансия:", vacancy.title);
                try {
                    const message = `<b>${vacancy.title}</b>\n${vacancy.company}\n<a href="${vacancy.link}">Подробнее</a>`;
                    await (0, bot_1.sendToChannel)(message);
                    console.log("✅ Отправлено:", vacancy.title);
                }
                catch (err) {
                    console.error("❌ Ошибка при отправке:", err);
                }
                lastSentLinks.push(vacancy.link);
            }
        }
    });
}
//# sourceMappingURL=cron.js.map