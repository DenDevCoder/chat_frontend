import { FC } from "react";
import { StyledListItem } from "../atoms/StyledListItem";
import StyledListAvatar from "../atoms/StyledListAvatar";
import StyledListItemText from "../atoms/StyledListItemText";
import { IUser } from "../api/dto/user.dto";

interface UserItemProps {
  user?: IUser;
  username: string;
  isCollapsed: boolean;
}

const UserItem: FC<UserItemProps> = ({ user, username, isCollapsed }) => {
  return (
    <StyledListItem
      key={user?.id}
      sx={{
        justifyContent: isCollapsed ? "center" : "flex-start",
      }}
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
