"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bot = void 0;
exports.sendToChannel = sendToChannel;
exports.publishJob = publishJob;
const telegraf_1 = require("telegraf");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.bot = new telegraf_1.Telegraf(process.env.BOT_TOKEN);
async function sendToChannel(text) {
    if (!process.env.CHANNEL_ID)
        throw new Error("CHANNEL_ID не задан!");
    await exports.bot.telegram.sendMessage(process.env.CHANNEL_ID, text, { parse_mode: "HTML" });
}
async function publishJob(title, link) {
    await exports.bot.telegram.sendMessage(process.env.CHANNEL_ID, `💼 <b>${title}</b>\n🔗 ${link}`, { parse_mode: "HTML" });
}
//# sourceMappingURL=bot.js.map