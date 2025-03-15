import { useState } from "react";
import RegisterForm from "../organisms/RegisterForm";
import CenteredForm from "../templates/CenteredFormWithLogo";
import { signUpNewUser } from "../supabase/auth";

const Register = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [repeatedPassword, setRepeatedPassword] = useState<string>("");

  const clearState = () => {
    setUsername(""), setPassword("");
    setEmail("");
    setRepeatedPassword("");
  };

  const handleRegister = async (email: string, password: string) => {
    try {
      if (password !== repeatedPassword) {
        console.log("password not repeated");
        return null;
      }
      if (!email || !password || !repeatedPassword || !username) {
        console.log("all input is required!");
        return null;
      }
      await signUpNewUser(email, password);
      clearState();
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "problem with registration of new user";
      throw new Error(errorMessage);
    }
  };

  return (
    <CenteredForm>
      <RegisterForm
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        email={email}
        setEmail={setEmail}
        repeatedPassword={repeatedPassword}
        setRepeatedPassword={setRepeatedPassword}
        handleRegister={handleRegister}
      />
    </CenteredForm>
  );
};

export default Register;
