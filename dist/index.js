"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bot_1 = require("./bot");
const cron_1 = require("./cron");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
async function bootstrap() {
    try {
        await bot_1.bot.launch();
        console.log("запущен!");
        await (0, bot_1.sendToChannel)("Тест: бот");
        (0, cron_1.startCron)();
    }
    catch (err) {
        console.error("error:", err);
    }
}
bootstrap();
process.once("SIGINT", () => bot_1.bot.stop("SIGINT"));
process.once("SIGTERM", () => bot_1.bot.stop("SIGTERM"));
//# sourceMappingURL=index.js.map