import { createClient } from "@supabase/supabase-js";

const supabaseURL = import.meta.env.VITE_PROJECT_URL;
const supabaseKey = import.meta.env.VITE_API_KEY;

export const supabase = createClient(supabaseURL, supabaseKey);
