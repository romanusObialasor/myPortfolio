import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import styled from "styled-components";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
const MainScreen = () => {
  return (
    <Container>
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </Container>
  );
};

export default MainScreen;

const Container = styled.div``;
