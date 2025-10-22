import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();

export const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
);

export async function isNewJob(id: string) {
  const { data } = await supabase.from("jobs").select("id").eq("id", id).single();

  if (data) return false;

  await supabase.from("jobs").insert([{ id }]);
  return true;
}
