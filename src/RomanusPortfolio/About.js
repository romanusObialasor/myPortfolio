import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <Right>
        <Image src="/images/17.jpg" />
      </Right>
      <Left>
        <Top>
          <Line></Line>
          <span>About Me</span>
        </Top>
        <Text>
          Who we are Dreamers and artists Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
          ut laoreet dolore magna aliquam erat volutpat. Who we are Dreamers and
          artists Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
          diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
          erat volutpat.
        </Text>
        <Button>What I Offer</Button>
      </Left>
    </Container>
  );
};

export default About;

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
  border-radius: 3px;

  &:hover {
    background-color: red;
    color: white;
  }
`;

const Text = styled.div`
  font-size: 20px;
  line-height: 35px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 28px;
    /* color: green; */
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 50px;
    font-weight: bold;
  }
  @media screen and (max-width: 760px) {
    margin: 20px;
  }
`;

const Line = styled.div`
  width: 40px;
  height: 1px;
  background: black;
  margin-right: 20px;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const Left = styled.div`
  width: 40%;
  height: 70%;
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  justify-content: space-around;

  @media screen and (max-width: 760px) {
    width: 95%;
    text-align: center;
    display: flex;
    align-items: center;
    margin-top: 20px;
  }
`;

const Container = styled.div`
  background-color: #e6e6e6;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    height: 100%;
    padding-bottom: 20px;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
  }
`;

const Right = styled.div`
  background: red;
  width: 40%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
