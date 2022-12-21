import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Validation from "../../../../classes/validation";

function LoginForm() {
  const validate = new Validation();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  console.log(userEmail);
  console.log(userPassword);

  // Form refs
  const email = useRef(null);
  const password = useRef(null);

  // Login
  const loginHandler = (evt) => {
    evt.preventDefault();
    // Set Login Data
    setUserEmail(email.current.value);
    setUserPassword(password.current.value);
  };

  return (
    <div>
      <form className="login-form mt-12">
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
          <button
            className="btn-yellow btn-login2 mt-8"
            type="button"
            aria-labeled="login"
            onClick={loginHandler}
          >
            Login
          </button>

          <Link to="/">
            <button
              className="btn-yellow btn-login2 mt-8"
              type="button"
              aria-labeled="try demo"
            >
              Try Demo
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
