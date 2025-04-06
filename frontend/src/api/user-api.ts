import axios from "axios";
import { AxiosResponse } from "axios";
import { backend_api } from "../config/env-config";
import { IUser } from "./dto/user.dto";
import { getToken } from "./token";
export const addUserToTable = async (
  id: string,
  username: string,
  gmail: string,
  password: string,
  tag: string
) => {
  return await axios.post(`${backend_api}/user`, {
    id,
    username,
    gmail,
    password,
    tag,
  });
};

export const getUsersByTag = async (tag: string) => {
  const users: AxiosResponse<IUser[]> = await axios.get(
    `${backend_api}/user/${tag}`
  );
  console.log(`tag: ${users.data}`);
  return users.data;
};

export const getUserInfoById = async (id: string) => {
  const token = await getToken();
  const user: AxiosResponse<IUser> = await axios.get(`${backend_api}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(user);
  return user.data;
};
