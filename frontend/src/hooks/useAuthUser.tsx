import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthUserInfo } from "../supabase/auth";
import { setUser } from "../redux/Slice/userSlice";
import { useDispatch } from "react-redux";

const useAuthUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getAuthUserInfo();
        if (!user.session) {
          navigate("/signIn");
        }
        console.log(user.session);
        dispatch(setUser(user.session));
      } catch (error: unknown) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : "problem with checking user auth";
        throw new Error(errorMessage);
      }
    };
    fetchUser();
  }, [navigate, dispatch]);
};

export default useAuthUser;
