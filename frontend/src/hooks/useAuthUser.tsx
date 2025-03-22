import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthUserInfo } from "../supabase/auth";
import { setUser } from "../redux/Slice/userSlice";
import { useDispatch } from "react-redux";
import { getUserInfoById } from "../api/user-api";

const useAuthUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userSession = await getAuthUserInfo();
        if (!userSession.session) {
          navigate("/signIn");
        }
        console.log(userSession.session);
        const userInfo = await getUserInfoById(userSession.session?.user.id!);
        dispatch(
          setUser({ user: userSession.session, username: userInfo.username })
        );
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
