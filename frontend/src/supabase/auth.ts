import { supabase } from "./supabase-config";

export const signUpNewUser = async (email: string, password: string) => {
  const { data } = await supabase.auth.signUp({ email, password });
  console.log(data);
  return data;
};

export const signInWithEmail = async (email: string, password: string) => {
  const { data } = await supabase.auth.signInWithPassword({ email, password });
  console.log(data);
};

export const getAuthUserInfo = async () => {
  const { data } = await supabase.auth.getSession();
  return data;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Ошибка при выходе:", error.message);
  } else {
    console.log("Успешный выход из системы");
  }
};
