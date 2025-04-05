import { useEffect, useState } from "react";
import { debounce } from "lodash";
import { StyledPaper } from "../atoms/StyledPaper";
import { StyledList } from "../atoms/StyledList";
import { StyledListItem } from "../atoms/StyledListItem";
import { IconButton, TextField } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { IUser } from "../api/dto/user.dto";
import { getUsersByTag } from "../api/user-api";
import UserItem from "../molecules/UserItem";
import { getAllChats } from "../api/chat-api";
import { IChats } from "../api/dto/chat.dto";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [value, setValue] = useState<string>("");
  const [chats, setChats] = useState<IChats[]>([]);
  const [findedUser, setFindedUser] = useState<IUser[]>([]);
  const username = useSelector(
    (state: RootState) => state.userSession.username
  );

  const fetchUsers = async () => {
    const users = await getUsersByTag(value);
    setFindedUser(users);
  };
  const debouncedFetchResult = debounce(fetchUsers, 500);

  useEffect(() => {
    const fetchChats = async () => {
      const chats = await getAllChats();
      setChats(chats);
    };
    fetchChats();
  }, []);

  useEffect(() => {
    debouncedFetchResult();
    return () => debouncedFetchResult.cancel();
  }, [value]);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <StyledPaper
      sx={{
        width: isCollapsed ? "60px" : "250px",
        height: "100%",
        transition: "width 0.3s",
      }}
    >
      <StyledList sx={{ p: 0 }}>
        <StyledListItem
          sx={{
            justifyContent: "flex-end",
            pb: 2,
            pt: 1,
            borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          }}
        >
          <IconButton
            onClick={toggleSidebar}
            sx={{
              transform: isCollapsed ? "rotate(180deg)" : "none",
              transition: "transform 0.3s",
            }}
          >
            {isCollapsed ? <ArrowRightIcon /> : <ArrowLeftIcon />}
          </IconButton>
        </StyledListItem>
        <UserItem username={username} isCollapsed={isCollapsed} />
        {!isCollapsed && (
          <StyledListItem>
            <TextField
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="find chat"
            />
          </StyledListItem>
        )}

        {!value &&
          chats.map((chat) => (
            <UserItem
              username={chat.user.username}
              userId={chat.user.id}
              isCollapsed={isCollapsed}
            />
          ))}

        {value &&
          findedUser.map((user) => (
            <UserItem
              isCollapsed={isCollapsed}
              username={user.username}
              userId={user.id}
            />
          ))}
      </StyledList>
    </StyledPaper>
  );
};

export default Sidebar;
