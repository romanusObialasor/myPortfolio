import React from "react";
import styled from "styled-components";

const Slider = ({ dis, Toggle }) => {
  return (
    <Container dis={dis}>
      <Wrapper>
        <span>x</span>
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
      </Wrapper>
    </Container>
  );
};

export default Slider;

const Container = styled.div`

`;

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* color: white; */
  background: lavender;
  justify-content: space-around;

  span {
    cursor: pointer;
  }
opacity:${({})}
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
