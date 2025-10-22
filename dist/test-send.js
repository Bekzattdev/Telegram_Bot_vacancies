"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bot_1 = require("./bot");
const bot_2 = require("./bot");
(async () => {
    await bot_1.bot.launch();
    await (0, bot_2.sendToChannel)("🔥 Тестовое сообщение вручную!");
    console.log("✅ Отправлено!");
})();
//# sourceMappingURL=test-send.js.map