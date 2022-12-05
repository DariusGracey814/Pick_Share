import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginStateActions } from "../../../store/loginState";

function HomeFeed() {
  const dispatch = useDispatch();

  // Change header button to user account button when accessing this page
  useEffect(() => {
    dispatch(loginStateActions.userLoggedIn(true));
  }, []);

  return (
    <section>
      <h1>Home Feed</h1>
    </section>
  );
}

export default HomeFeed;
