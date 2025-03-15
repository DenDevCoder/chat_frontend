import { Avatar, ListItemAvatar } from "@mui/material";
import React from "react";

const StyledListAvatar: React.FC<{
  alt: string;
  src: string;
  margin?: string;
}> = ({ alt, src, margin }) => {
  return (
    <ListItemAvatar>
      <Avatar alt={alt} src={src} sx={{ margin }} />
    </ListItemAvatar>
  );
};

export default StyledListAvatar;
