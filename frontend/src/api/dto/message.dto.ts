export interface messageDto {
  id: string;
  sender: {
    id: string;
    username: string;
  };
  text: string;
  createdAt: string;
  chatId: string;
}
