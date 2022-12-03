import React from "react";
import Container from "../UI/Container/Container";
import LoginForm from "../UI/Forms/LoginForm";

function Hero() {
  return (
    <section className="hero">
      <Container>
        <div>
          {/* Content */}
          <div className="hero-content">
            <h1 className="text-5xl text-white font-bold pt-12 loginHeading">
              Get the <span className="accent-dark">latest sports picks</span>{" "}
              shared by the sports betting{" "}
              <span className="accent-dark">community</span>.
            </h1>
            <p className="text-white text-lg mt-4 max-w-lg hero-text">
              With Pick Share you get direct access to a multitude of sports
              betting picks shared directly by the community. Login now to
              access and share picks while keeping track of your wins.
            </p>
          </div>
          {/* Login Form (include demo account) */}
          <div>
            <LoginForm />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
