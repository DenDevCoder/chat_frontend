import { FC } from "react";
import { StyledListItem } from "../atoms/StyledListItem";
import StyledListAvatar from "../atoms/StyledListAvatar";
import StyledListItemText from "../atoms/StyledListItemText";
import { IUser } from "../api/dto/user.dto";
import { useDispatch } from "react-redux";
import { setChat } from "../redux/Slice/chatSlice";
import { chatExistCheck } from "../api/chat-api";
import { setChatInfo } from "../redux/Slice/chatInfoSlice";

interface UserItemProps {
  userId?: string;
  username: string;
  isCollapsed: boolean;
}

const UserItem: FC<UserItemProps> = ({ userId, username, isCollapsed }) => {
  const dispatch = useDispatch();
  const checkChatExist = async (userId: string, username: string) => {
    try {
      const chatExist = await chatExistCheck(userId);
      dispatch(setChat({ chatId: chatExist.chatId, exist: chatExist.exists }));

      dispatch(setChatInfo({ chatName: username, userId: userId }));
    } catch (error: any) {
      throw new Error("problem with checking chat exist");
    }
  };

  return (
    <StyledListItem
      key={userId}
      sx={{
        justifyContent: isCollapsed ? "center" : "flex-start",
        cursor: "pointer",
      }}
      onClick={() => checkChatExist(userId!, username)}
    >
      <StyledListAvatar
        margin="0 auto"
        alt={username}
        src="/static/images/avatar/1.jpg"
      />

      {!isCollapsed && <StyledListItemText primary={username} />}
    </StyledListItem>
  );
};

export default UserItem;
