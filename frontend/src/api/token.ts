import { getAuthUserInfo } from "../supabase/auth";

export const getToken = async () => {
  try {
    const userSession = await getAuthUserInfo();
    return userSession.session?.access_token;
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "problem with getting token";
    throw new Error(errorMessage);
  }
};
