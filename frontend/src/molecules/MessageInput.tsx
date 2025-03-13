import { FormInput } from "../atoms/FormInput";
import styled from "styled-components";
import { Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { StyledIconButton } from "../atoms/StyledIconButton";

const InputContainer = styled(Box)`
  max-width: 700px;
  width: 100%;
  display: flex;
`;

const IconContainer = styled(Box)`
  display: flex;
  align-items: flex-end;
`;

const MessageInput = () => {
  return (
    <InputContainer>
      <FormInput
        sx={{ background: "#1f232f", border: "none" }}
        multiline
        maxRows={5}
      />
      <IconContainer>
        <StyledIconButton>
          <SendIcon />
        </StyledIconButton>
      </IconContainer>
    </InputContainer>
  );
};

export default MessageInput;
