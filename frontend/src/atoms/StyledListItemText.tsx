import { ListItemText, Typography } from "@mui/material";
import React from "react";

interface StyledTextProps {
  primary: string;
  secondary?: string;
}

const StyledListItemText: React.FC<StyledTextProps> = ({
  primary,
  secondary,
}) => {
  return (
    <ListItemText
      primary={primary}
      secondary={
        <React.Fragment>
          <Typography
            component="span"
            variant="body2"
            sx={{ color: "text.primary", display: "inline" }}
          >
            {secondary}
          </Typography>
        </React.Fragment>
      }
    />
  );
};

export default StyledListItemText;
