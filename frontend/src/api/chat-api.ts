import axios, { AxiosResponse } from "axios";
import { backend_api } from "../config/env-config";
import { IChatExist, IChats } from "./dto/chat.dto";
import { getToken } from "./token";
import { messageDto } from "./dto/message.dto";

export const chatExistCheck = async (id: string) => {
  const token = await getToken();
  const exist: AxiosResponse<IChatExist> = await axios.get(
    `${backend_api}/chat/exists-chat/${id}`,
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
    `${backend_api}/chat`,
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
    `${backend_api}/chat/${userId}`,
    { userId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const chatHistory = async (chatId: string) => {
  const token = await getToken();
  const response: AxiosResponse<messageDto[]> = await axios.get(
    `${backend_api}/chat/history/${chatId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
