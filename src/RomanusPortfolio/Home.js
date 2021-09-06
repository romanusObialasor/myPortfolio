import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import ReactTypingEffect from "react-typing-effect";
import styled from "styled-components";

const Home = () => {
  return (
    <div>
      <Container>
        <Top>
          <Logo src="/images/logo.png" />
          <Nav>
            <span>Home</span>
            <span>About</span>
            <span>Potfolio</span>
            <span>Service</span>
            <span>Contact</span>
          </Nav>
          <Menu />
        </Top>
        <Line></Line>
        <Body>
          <span>
            Hi i'm Romanus Obialasor{" "}
            <Typer
              text={[
                "A web Developer",
                "An Experience Designer",
                "A FullStack Dev",
              ]}
              speed={100}
              eraseDelay={1000}
              eraseSpeed={100}
              typingDelay={500}
            />
          </span>
          <Button>About me</Button>
        </Body>
      </Container>
    </div>
  );
};

export default Home;

const Typer = styled(ReactTypingEffect)`
  color: gold;
`;

const Menu = styled(GiHamburgerMenu)`
  font-size: 30px;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Button = styled.div`
  border: 1px solid red;
  margin-top: 50px;
  width: 130px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 350ms;
  cursor: pointer;

  &:hover {
    background-color: red;
    color: black;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  color: white;
  position: relative;
  display: flex;
  flex-direction: column;

  &:before {
    content: "";
    background: url("/images/3.jpg") center center / cover no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.3;
  }
`;

const Top = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  z-index: 1;
  width: 100%;
`;

const Logo = styled.img`
  width: 150px;
  object-fit: contain;
  padding-left: 40px;
`;

const Nav = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 40px;

  span {
    margin-left: 40px;
    cursor: pointer;
    opacity: 0.7;
    transition: all 250ms;

    &:hover {
      opacity: 1;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: white;
  margin-top: 70px;
  position: fixed;
  z-index: 1;
`;

const Body = styled.div`
  // background: red;
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 70px;

  span {
    font-size: 70px;
    font-weight: bold;
    max-width: 65%;
    text-align: center;
    @media screen and (max-width: 425px) {
      font-size: 40px;
    }
  }
`;

// const Top = styled.div`

// `;

// const Top = styled.div`

// `;
