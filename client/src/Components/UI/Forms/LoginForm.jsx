import React from "react";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <div>
      <p className="accent-dark m-0 pt-4">
        Click try demo to access demo account
      </p>
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
            required
          />
        </div>

        <div>
          <button
            className="btn-yellow btn-login2 mt-8"
            type="button"
            aria-labeled="login"
          >
            Login
          </button>

          <Link to="/pick-share-homeDarius">
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
