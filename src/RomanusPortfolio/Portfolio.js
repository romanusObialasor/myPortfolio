import React from "react";
import styled from "styled-components";

const Portfolio = () => {
  return (
    <Container>
      <Top>
        <Header>Previous Works</Header>
      </Top>
      <Works>
        <Box>
          <Image src="/images/15.png" />
          <span>Disney+</span>
        </Box>
        <Box>
          <Image src="/images/45.jpg" />
          <span>Good Tailor's Website</span>
        </Box>
        <Box>
          <Image src="/images/Darksky.jpg" />
          <span>Weather app</span>
        </Box>
        <Box>
          <Image src="/images/goals.jpg" />
          <span>To-Do App</span>
        </Box>
      </Works>
      <Testimony>Testimony</Testimony>
    </Container>
  );
};

export default Portfolio;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: aliceblue;

  @media screen and (max-width: 768px) {
    height: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

const Box = styled.div`
  width: 300px;
  height: 300px;
  background: black;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  transition: all 250ms;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: -5px 5px 10px rgba(0, 0, 0, 0.5);
  margin: 10px;

  span {
    opacity: 0;
    transition: all 350ms;
    position: absolute;
    font-size: 30px;
    font-family: cursive;
    text-align: center;
    /* display: none; */
    text-align: center;
    max-width: 200px;
    color: white;
  }

  &:hover > span {
    opacity: 1;
    /* display: flex;
    justify-content: center; */
    margin-left: 40px;
  }

  :hover {
    transform: scale(1.05);
    box-shadow: none;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  transition: 350ms;
  border-radius: 5px;

  &:hover {
    opacity: 0.5;
  }
`;

const Works = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    margin: 20px;
  }
`;

const Top = styled.div``;

const Header = styled.span`
  border-bottom: 1px solid black;
  font-size: 30px;
  /* background-color: green; */
  padding-bottom: 10px;
  font-weight: 600;
`;

const Testimony = styled.div``;
