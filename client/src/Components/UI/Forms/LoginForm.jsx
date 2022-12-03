import React from "react";

function LoginForm() {
  return (
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

      <button className="btn-yellow btn-login mt-8" type="button">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
