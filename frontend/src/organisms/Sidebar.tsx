import { useState } from "react";
import { StyledPaper } from "../atoms/StyledPaper";
import { StyledList } from "../atoms/StyledList";
import StyledListAvatar from "../atoms/StyledListAvatar";
import StyledListItemText from "../atoms/StyledListItemText";
import { StyledListItem } from "../atoms/StyledListItem";
import { IconButton } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

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

        <StyledListItem
          sx={{ justifyContent: isCollapsed ? "center" : "flex-start" }}
        >
          <StyledListAvatar
            margin="0 auto"
            alt="Denis"
            src="/static/images/avatar/1.jpg"
          />

          {!isCollapsed && (
            <StyledListItemText primary="Denis" secondary="Hello world" />
          )}
        </StyledListItem>
      </StyledList>
    </StyledPaper>
  );
};

export default Sidebar;
