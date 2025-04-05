import axios, { AxiosResponse } from "axios";
import { backend_chat_api } from "../config/env-config";
import { IChatExist, IChats } from "./dto/chat.dto";
import { getToken } from "./token";

export const chatExistCheck = async (id: string) => {
  const token = await getToken();
  const exist: AxiosResponse<IChatExist> = await axios.get(
    `${backend_chat_api}/user/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(exist.data);
  return exist.data;
};

export const getAllChats = async () => {
  const token = await getToken();
  const chats: AxiosResponse<IChats[]> = await axios.get(
    `${backend_chat_api}/myChats`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return chats.data;
};

export const createChat = async (userId: string) => {
  const token = await getToken();
  const response: AxiosResponse<IChats> = await axios.post(
    `${backend_chat_api}/user/${userId}`,
    { userId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
