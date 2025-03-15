import { NamedField } from "../molecules/NamedField";
import { StyledButton } from "../atoms/StyledContainedButton";
import { LinkText } from "../atoms/LinkStyleText";
import { Link } from "react-router-dom";
import { CenteredText } from "../atoms/CenteredText";
import { StyledFormContainer } from "../atoms/AuthFormContainer";
import React from "react";

interface RegisterFormProps {
  username: string;
  setUsername: (arg: string) => void;
  email: string;
  setEmail: (arg: string) => void;
  password: string;
  setPassword: (arg: string) => void;
  repeatedPassword: string;
  setRepeatedPassword: (arg: string) => void;
  handleRegister: (email: string, password: string) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  repeatedPassword,
  setRepeatedPassword,
  handleRegister,
}) => {
  return (
    <StyledFormContainer>
      <NamedField
        label="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <NamedField
        label="Email"
        mt="1rem"
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
      <NamedField
        label="Repeat password"
        mt="1rem"
        type="password"
        value={repeatedPassword}
        onChange={(e) => setRepeatedPassword(e.target.value)}
      />
      <StyledButton
        onClick={() => handleRegister(email, password)}
        fullWidth
        sx={{ mt: "20px" }}
      >
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
