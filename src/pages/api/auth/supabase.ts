import { createClient } from "@supabase/supabase-js";

// TODO: 環境変数型付け上手い方法ください。
export const supabase =
  process.env.SUPABASE_URL &&
  process.env.SUPABASE_ANON_KEY &&
  createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
