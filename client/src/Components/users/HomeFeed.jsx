import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginStateActions } from "../../../store/loginState";
import Container from "../UI/Container/Container";
import Feed from "./Feed/Feed";

function HomeFeed() {
  const dispatch = useDispatch();

  // Change header button to user account button when accessing this page
  useEffect(() => {
    dispatch(loginStateActions.userLoggedIn(true));
  }, []);

  return (
    <section className="dark-mid w-full h-screen">
      <Container>
        <div className="pt-10 border border-red-600">
          <Feed />
        </div>
      </Container>
    </section>
  );
}

export default HomeFeed;
