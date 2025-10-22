"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.supabase = void 0;
exports.isNewJob = isNewJob;
const supabase_js_1 = require("@supabase/supabase-js");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.supabase = (0, supabase_js_1.createClient)(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
async function isNewJob(id) {
    const { data } = await exports.supabase.from("jobs").select("id").eq("id", id).single();
    if (data)
        return false;
    await exports.supabase.from("jobs").insert([{ id }]);
    return true;
}
//# sourceMappingURL=db.js.map