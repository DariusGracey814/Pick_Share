import React from "react";
import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <header className="py-4 dark-mid">
      <Container>
        <Navigation />
      </Container>
    </header>
  );
}

export default Header;
