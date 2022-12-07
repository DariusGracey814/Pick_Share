import React from "react";

function AddPost() {
  return (
    <div className="">
      <h1 className="heading dark-mid text-white py-4 my-4 russo text-center border">
        Share your Sports Betting Picks
      </h1>
      <form className="login-form rounded-2xl box-shadow py-4 mt-6">
        <div className="grid mb-3 add-posts-padd">
          <label className="text-black mb-2" htmlFor="betPlatform">
            Betting Platform:
          </label>
          <input
            className="p-2 form-clr border"
            type="text"
            name="betPlatform"
            id="betPlatform"
            required
          />
        </div>
        {/* Password */}
        <div className="grid add-posts-padd">
          <label className="text-black mb-2" htmlFor="betPicks">
            Sports Picks:
          </label>
          <textarea
            className="p-2 form-clr border"
            name="betPicks"
            id="betPicks"
            cols="20"
            rows="6"
          ></textarea>
        </div>

        <div className="add-posts-padd">
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
