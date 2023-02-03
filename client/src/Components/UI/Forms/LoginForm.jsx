import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { formDataActions } from "../../../../store/formData";
import { Link } from "react-router-dom";

function LoginForm() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const dispatch = useDispatch();
  const userEmail1 = useSelector((state) => state.formData.email);
  const userPassword1 = useSelector((state) => state.formData.password);

  useEffect(() => {
    console.log(userEmail1);
    console.log(userPassword1);
  }, [userEmail1, userPassword1]);

  // Form refs
  const email = useRef(null);
  const password = useRef(null);

  function loginHandler(evt) {
    evt.preventDefault();

    // Pass data to formDataCheck redux slice
    dispatch(formDataActions.enteredEmail(email.current.value));
    dispatch(formDataActions.enteredPassword(password.current.value));

    // get values
  }

  // Login
  return (
    <div>
      <form className="login-form mt-12" onSubmit={loginHandler}>
        <div className="grid mb-3">
          <label className="text-white mb-2" htmlFor="userEmail">
            Email Address:
          </label>
          <input
            className="p-3 loginInput"
            type="email"
            name="email"
            id="email"
            ref={email}
            required
          />
        </div>
        {/* Password */}
        <div className="grid">
          <label className="text-white mb-2" htmlFor="passwords">
            Password:
          </label>
          <input
            className="p-3 loginInput"
            type="password"
            name="password"
            id="password"
            ref={password}
            required
          />
        </div>

        <div className="login-btn-wrapper">
          <button className="btn-yellow btn-login2 mt-8" type="submit">
            Login
          </button>

          <Link to="/">
            <button className="btn-yellow btn-login2 mt-8" type="button">
              Try Demo
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
