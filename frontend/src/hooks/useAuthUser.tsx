import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthUserInfo } from "../supabase/auth";
import { Session } from "@supabase/supabase-js";

const useAuthUser = () => {
  const [user, setUser] = useState<Session | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getAuthUserInfo();
        if (!user.session) {
          navigate("/signIn");
        }
        console.log(user.session);
        setUser(user.session);
      } catch (error: unknown) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : "problem with checking user auth";
        throw new Error(errorMessage);
      }
    };
    fetchUser();
  }, [navigate]);
  return user;
};

export default useAuthUser;
