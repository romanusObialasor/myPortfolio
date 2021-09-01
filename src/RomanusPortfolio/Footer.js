import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <span>c</span> By Romanus Obialasor <div></div> 💪 Powered By CodeLab
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 40px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  span {
    border: 1px solid white;
    height: 20px;
    width: 20px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 4px;
    margin-right: 10px;
  }

  div {
    background: white;
    width: 1px;
    height: 70%;
    margin: 10px;
    @media screen and (max-width: 760px) {
      width: 30%;
      height: 1px;
      background-color: white;
    }
  }

  @media screen and (max-width: 760px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;
