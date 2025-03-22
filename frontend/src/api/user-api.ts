import axios from "axios";
import { AxiosResponse } from "axios";
import { backend_user_api } from "../config/env-config";
import { IUser } from "./dto/user.dto";
export const addUserToTable = async (
  id: string,
  username: string,
  gmail: string,
  password: string,
  tag: string
) => {
  return await axios.post(`${backend_user_api}/register`, {
    id,
    username,
    gmail,
    password,
    tag,
  });
};

export const getUsersByTag = async (tag: string) => {
  const users: AxiosResponse<IUser[]> = await axios.get(
    `${backend_user_api}/tag/${tag}`
  );
  return users.data;
};

export const getUserInfoById = async (id: string) => {
  const user: AxiosResponse<IUser> = await axios.get(
    `${backend_user_api}/${id}`
  );
  return user.data;
};
