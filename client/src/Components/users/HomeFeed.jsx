import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginStateActions } from "../../../store/loginState";
import { navigationActions } from "../../../store/navigation";
// Utils
import Utils from "../../../utils/utils";
// Components
import Container from "../UI/Container/Container";
import Feed from "./Feed/Feed";
import UserStats from "./UserStats/UserStats";
import AddPost from "./AddPostForm/AddPost";

// Icons
import { RiMenuUnfoldFill, RiCloseCircleFill } from "react-icons/ri";

function HomeFeed() {
  const dispatch = useDispatch();
  const navUtils = new Utils(dispatch, navigationActions);
  const navState = useSelector((state) => state.nav.show);

  // Change header button to user account button when accessing this page
  useEffect(() => {
    dispatch(loginStateActions.userLoggedIn(true));
    // Reset Navigation menu to false on each page reload
    dispatch(navigationActions.toggleNav(false));
  }, []);

  return (
    <section className="light-clr w-full h-main">
      <Container>
        {/* Mobile Menu */}
        <button
          className="mobile-menu"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navigationMenu"
          aria-controls="navigationMenu"
          aria-expanded={navState}
          aria-label="Toggle navigation"
          onClick={(evt) => navUtils.toggleNavHandler(evt)}
        >
          {!navState ? (
            <RiMenuUnfoldFill className="text-3xl dark-text" />
          ) : (
            <RiCloseCircleFill className="text-3xl dark-text" />
          )}
        </button>

        <div className="grid grid-cols-2 gap-x-6 pt-10 cols-1">
          <Feed />
          <div
            className={`buckets ${
              navState ? "active" : null
            } flex flex-col justify-center items-center`}
          >
            {/* Buckets */}
            <div>
              <UserStats />
              <AddPost />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HomeFeed;
