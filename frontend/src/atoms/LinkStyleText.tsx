import styled from "styled-components";
import { Typography } from "@mui/material";

export const LinkText = styled(Typography)`
  color: #5ca6f6;
  display: inline-block;
  cursor: pointer;
  &:hover {
    color: #2577cf;
    text-decoration: underline;
  }
`;
