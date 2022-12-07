import React from "react";
import { Link } from "react-router-dom";
import Container from "../../UI/Container/Container";

function AddPostMobile() {
  return (
    <div>
      <h1 className="heading dark-mid text-white px-4 russo text-center border-t">
        <Link className="btn-sm pick-back-btn" to="/pick-share-homeDarius">
          Go back
        </Link>{" "}
        Share your Sports Betting Picks
      </h1>
      <Container>
        <div className="grid">
          <div className="add-pick-wrapper">
            <form>
              <div className="grid mb-3 mt-10 px-10 padd-sm">
                <label className="text-black mb-2" htmlFor="betPlatform">
                  Betting Platform:
                </label>
                <input
                  className="p-2 form-clr border pick-input"
                  type="text"
                  name="betPlatform"
                  id="betPlatform"
                  required
                />
              </div>
              {/* textarea */}
              <div className="grid px-10 padd-sm">
                <label className="text-black mb-2" htmlFor="betPicks">
                  Sports Picks:
                </label>
                <textarea
                  className="p-2 form-clr border pick-input"
                  name="betPicks"
                  id="betPicks"
                  cols="20"
                  rows="6"
                ></textarea>
              </div>

              <div className="px-10 padd-sm mt-8">
                <button
                  className="btn-yellow btn-login2 body-btn"
                  type="button"
                  aria-labeled="login"
                >
                  Add Picks
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AddPostMobile;
