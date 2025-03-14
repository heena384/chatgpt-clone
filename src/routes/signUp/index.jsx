import {SignUp} from "@clerk/clerk-react";
import "./signUp.css";

const SignUpPage = () => {
  return (
    <div className="sign-up">
      <SignUp path="/sign-up" signInUrl="/sign-in" />
    </div>
  );
};

export default SignUpPage;
