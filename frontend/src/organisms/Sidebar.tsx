import { StyledPaper } from "../atoms/StyledPaper";
import { StyledList } from "../atoms/StyledList";
import StyledListAvatar from "../atoms/StyledListAvatar";
import StyledListItemText from "../atoms/StyledListItemText";
import { StyledListItem } from "../atoms/StyledListItem";

const Sidebar = () => {
  return (
    <StyledPaper
      sx={{
        width: "250px",
        height: "100%",
      }}
    >
      <StyledList>
        <StyledListItem>
          <StyledListAvatar alt="Denis" src="/static/images/avatar/1.jpg" />
          <StyledListItemText primary="Denis" secondary="Hello world" />
        </StyledListItem>
      </StyledList>
    </StyledPaper>
  );
};

export default Sidebar;
