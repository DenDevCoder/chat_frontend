import { useState } from "react";
import LoginForm from "../organisms/LoginForm";
import CenteredForm from "../templates/CenteredFormWithLogo";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <CenteredForm>
      <LoginForm
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
      />
    </CenteredForm>
  );
};

export default SignIn;
