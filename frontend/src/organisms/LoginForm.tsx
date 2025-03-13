import { NamedField } from "../molecules/NamedField";
import { StyledButton } from "../atoms/StyledContainedButton";
import { LinkText } from "../atoms/LinkStyleText";
import { Link } from "react-router-dom";
import { CenteredText } from "../atoms/CenteredText";
import { StyledFormContainer } from "../atoms/AuthFormContainer";

const LoginForm = () => {
  return (
    <StyledFormContainer>
      <NamedField label="Email" />
      <NamedField label="Password" mt="1rem" type="password" />
      <StyledButton fullWidth sx={{ mt: "20px" }}>
        Login
      </StyledButton>
      <CenteredText mt={"2rem"}>
        You don`t have an account?{" "}
        <Link to={"/register"}>
          <LinkText>Create</LinkText>
        </Link>
      </CenteredText>
    </StyledFormContainer>
  );
};

export default LoginForm;
