import { NamedField } from "../molecules/NamedField";
import { StyledButton } from "../atoms/StyledContainedButton";
import { LinkText } from "../atoms/LinkStyleText";
import { Link } from "react-router-dom";
import { CenteredText } from "../atoms/CenteredText";
import { StyledFormContainer } from "../atoms/AuthFormContainer";

const RegisterForm = () => {
  return (
    <StyledFormContainer>
      <NamedField label="username" />
      <NamedField label="Email" mt="1rem" />
      <NamedField label="Password" mt="1rem" type="password" />
      <NamedField label="Repeat password" mt="1rem" type="password" />
      <StyledButton fullWidth sx={{ mt: "20px" }}>
        Register
      </StyledButton>
      <CenteredText mt={"2rem"}>
        You have an account?{" "}
        <Link to={"/signIn"}>
          <LinkText>Log in</LinkText>
        </Link>
      </CenteredText>
    </StyledFormContainer>
  );
};

export default RegisterForm;
