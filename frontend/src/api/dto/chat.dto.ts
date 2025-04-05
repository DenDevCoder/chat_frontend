export interface IChats {
  chatId: string;
  user: {
    id: string;
    username: string;
    tag: string;
  };
}

export interface IChatExist {
  chatId: string | null;
  exists: boolean;
}
