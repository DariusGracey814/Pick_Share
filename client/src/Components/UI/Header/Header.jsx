import React from "react";
import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <header className="border border-red-600 py-3">
      <Container>
        <Navigation />
      </Container>
    </header>
  );
}

export default Header;
