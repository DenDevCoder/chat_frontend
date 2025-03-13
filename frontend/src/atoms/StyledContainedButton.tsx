import styled from "styled-components";
import { Button } from "@mui/material";

export const StyledButton = styled(Button).attrs({
  variant: "contained",
})`
  &.MuiButton-contained {
    border-radius: 10px;
    background-color: #42566c;
  }
`;
