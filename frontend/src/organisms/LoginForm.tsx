import { NamedField } from "../molecules/NamedField";
import { StyledButton } from "../atoms/StyledContainedButton";
import { LinkText } from "../atoms/LinkStyleText";
import { Link } from "react-router-dom";
import { CenteredText } from "../atoms/CenteredText";
import { StyledFormContainer } from "../atoms/AuthFormContainer";
import React from "react";

interface LoginFormProps {
  email: string;
  password: string;
  setEmail: (arg: string) => void;
  setPassword: (arg: string) => void;
  handleSignIn: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  email,
  password,
  setEmail,
  setPassword,
  handleSignIn,
}) => {
  return (
    <StyledFormContainer>
      <NamedField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <NamedField
        label="Password"
        mt="1rem"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <StyledButton
        onClick={() => handleSignIn(email, password)}
        fullWidth
        sx={{ mt: "20px" }}
      >
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
