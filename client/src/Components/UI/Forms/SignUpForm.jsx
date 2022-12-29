import React, { useState, useRef } from "react";

function SignUpForm() {
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  console.log(username);
  console.log(userEmail);
  console.log(userPassword);

  const userName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const rePassword = useRef(null);

  // Sign up Handler
  const signupHandler = (evt) => {
    evt.preventDefault();

    // Set sign up form data
    setUsername(userName.current.value);
    setUserEmail(email.current.value);
    setUserPassword(password.current.value);
  };

  return (
    <div>
      <div className="hero-content">
        <h1 className="text-5xl text-white font-bold pt-8 loginHeading">
          Get the <span className="accent-dark">latest sports picks</span>{" "}
          shared by the sports betting{" "}
          <span className="accent-dark">community</span>.
        </h1>
        <p className="text-white text-lg mt-4 max-w-lg hero-text">
          Sign up now to access and share picks while keeping track of your
          wins.
        </p>
      </div>
      <form className="login-form mt-4">
        {/* Full name */}
        <div className="grid mb-3">
          <label className="text-white mb-2" htmlFor="fullName">
            FullName:
          </label>
          <input
            className="p-3 loginInput"
            type="text"
            name="fullName"
            id="fullName"
            ref={userName}
            required
          />
        </div>
        {/* Email */}
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
        <div className="grid mb-3">
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

        {/* Verify password */}
        <div className="grid">
          <label className="text-white mb-2" htmlFor="rePassword">
            Re-enter Password:
          </label>
          <input
            className="p-3 loginInput"
            type="password"
            name="rePassword"
            id="rePassword"
            ref={rePassword}
            required
          />
        </div>

        <button
          className="btn-yellow btn-login mt-8"
          type="button"
          onClick={signupHandler}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
