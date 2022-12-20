import React, { useRef } from "react";
import { Link } from "react-router-dom";
import 

function LoginForm() {
  // Form refs
  const email = useRef(null);
  const password = useRef(null);

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
