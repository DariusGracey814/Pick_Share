import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginStateActions } from "../store/loginState";
import SignUpForm from "../src/Components/UI/Forms/SignupForm";

function SignUp() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginStateActions.loginHandler(false));
  }, []);

  return (
    <section className="hero">
      <SignUpForm />
    </section>
  );
}

export default SignUp;
