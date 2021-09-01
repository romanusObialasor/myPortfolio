import React from "react";
import styled from "styled-components";

const HeaderComponents = ({Toggle}) => {
  return (
    <Container>
      <Links>
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
      </Links>
      <DropDown onClick={Toogle}>🍔</DropDown>
    </Container>
  );
};

export default HeaderComponents;

const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: coral;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const DropDown = styled.div`
  font-size: 40px;
  cursor: pointer;
  transition: 350ms;
  :hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
