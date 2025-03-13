import { Avatar, ListItemAvatar } from "@mui/material";
import React from "react";

const StyledListAvatar: React.FC<{ alt: string; src: string }> = ({
  alt,
  src,
}) => {
  return (
    <ListItemAvatar>
      <Avatar alt={alt} src={src} />
    </ListItemAvatar>
  );
};

export default StyledListAvatar;
