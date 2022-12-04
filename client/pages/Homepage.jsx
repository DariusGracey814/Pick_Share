import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginStateActions } from "../store/loginState";
import Hero from "../src/Components/Hero/Hero";

function Homepage() {
  const dispatch = useDispatch();

  //Set state = true if login page
  useEffect(() => {
    dispatch(loginStateActions.loginHandler(true));
  }, []);

  return (
    <section className="h-3/6">
      <Hero />
    </section>
  );
}

export default Homepage;
