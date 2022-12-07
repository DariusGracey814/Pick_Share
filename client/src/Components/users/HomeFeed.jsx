import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginStateActions } from "../../../store/loginState";
import Container from "../UI/Container/Container";
import Feed from "./Feed/Feed";
import UserStats from "./UserStats/UserStats";
import AddPost from "./AddPostForm/AddPost";

// Icons
import { FiMenu } from "react-icons/fi";

function HomeFeed() {
  const dispatch = useDispatch();

  // Change header button to user account button when accessing this page
  useEffect(() => {
    dispatch(loginStateActions.userLoggedIn(true));
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
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FiMenu className="text-3xl darkMidText" />
        </button>

        <div className="grid grid-cols-2 gap-x-6 h-main pt-10">
          <Feed />
          <div className="border border-red-600 flex flex-col">
            {/* Buckets */}
            <div className="">
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
