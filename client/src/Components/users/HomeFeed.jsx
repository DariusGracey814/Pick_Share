import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginStateActions } from "../../../store/loginState";
import Container from "../UI/Container/Container";
import Feed from "./Feed/Feed";
import UserStats from "./UserStats/UserStats";
import AddPost from "./AddPostForm/AddPost";

function HomeFeed() {
  const dispatch = useDispatch();

  // Change header button to user account button when accessing this page
  useEffect(() => {
    dispatch(loginStateActions.userLoggedIn(true));
  }, []);

  return (
    <section className="light-clr w-full h-main">
      <Container>
        <div className="grid grid-cols-2 border border-red-600 h-main mt-12">
          <Feed />
          <div>
            <UserStats />
            <AddPost />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HomeFeed;
