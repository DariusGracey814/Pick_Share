import React from "react";

function AddPost() {
  return (
    <div>
      <form className="login-form mt-12">
        <div className="grid mb-3">
          <label className="text-black mb-2" htmlFor="betPlatform">
            Betting Platform:
          </label>
          <input
            className="p-2 loginInput form-clr border"
            type="text"
            name="betPlatform"
            id="betPlatform"
            required
          />
        </div>
        {/* Password */}
        <div className="grid">
          <label className="text-black mb-2" htmlFor="betPicks">
            Sports Picks:
          </label>
          <textarea
            className="p-2 loginInput form-clr border"
            name="betPicks"
            id="betPicks"
            cols="20"
            rows="8"
          ></textarea>
        </div>

        <div>
          <button
            className="btn-yellow btn-login2 mt-8"
            type="button"
            aria-labeled="login"
          >
            Add Picks
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPost;
