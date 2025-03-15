import { supabase } from "./supabase-config";

export const signUpNewUser = async (email: string, password: string) => {
  const { data } = await supabase.auth.signUp({ email, password });
  console.log(data);
};

export const signInWithEmail = async (email: string, password: string) => {
  const { data } = await supabase.auth.signInWithPassword({ email, password });
  console.log(data);
};
