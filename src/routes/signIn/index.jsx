import {SignIn} from "@clerk/clerk-react";

import "./signIn.css";

const SignInPage = () => {
  return (
    <div className="sign-in">
      <SignIn path="/sign-in" signUpUrl="/sign-up" />
    </div>
  );
};

export default SignInPage;
