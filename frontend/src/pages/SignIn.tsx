import { useState } from "react";
import LoginForm from "../organisms/LoginForm";
import CenteredForm from "../templates/CenteredFormWithLogo";
import { signInWithEmail } from "../supabase/auth";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignIn = async (email: string, password: string) => {
    try {
      if (!password || !email) {
        console.log("all input is required");
        return null;
      }
      await signInWithEmail(email, password);
    } catch (error: unknown) {
      const errorMesssage =
        error instanceof Error ? error.message : "problem with sign in";
      throw new Error(errorMesssage);
    }
  };

  return (
    <CenteredForm>
      <LoginForm
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleSignIn={handleSignIn}
      />
    </CenteredForm>
  );
};

export default SignIn;
