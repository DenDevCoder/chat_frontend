import styled from "styled-components";
import { TextField } from "@mui/material";

export const FormInput = styled(TextField)`
  width: 100%;

  border-radius: 1rem;

  & .MuiOutlinedInput-root {
    border-radius: 1rem;

    & fieldset {
      border-color: rgba(255, 255, 255, 0.23);
    }
  }

  & .MuiInputBase-input {
    color: white;
  }

  & .MuiOutlinedInput-root.Mui-focused fieldset {
    border-color: #959595;
  }
`;
