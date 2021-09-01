import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Container>
      <Inputs>
        <Top>
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" />
        </Top>
        <Input1 placeholder="Your Message" />
      </Inputs>
      <Button>Submit</Button>
    </Container>
  );
};

export default Contact;

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
  border-radius: 5px;

  &:hover {
    background-color: red;
    color: white;
  }
`;

const Input1 = styled.input`
  background: none;
  border-bottom: 1px solid white;
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  color: white;
  font-size: 18px;
  width: 90%;
  padding: 20px;
  margin: 20px;
  height: 200px;

  ::placeholder {
    color: white;
    opacity: 0.4;
  }

  @media screen and (max-width: 768px) {
    width: 500px;
  }

  @media screen and (max-width: 425px) {
    width: 200px;
  }
`;

const Top = styled.div``;

const Input = styled.input`
  background: none;
  border-bottom: 1px solid white;
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  color: white;
  font-size: 18px;
  width: 400px;
  padding: 20px;
  margin: 20px;

  ::placeholder {
    color: white;
    opacity: 0.4;
  }

  @media screen and (max-width: 768px) {
    width: 200px;
  }

  @media screen and (max-width: 425px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Inputs = styled.div``;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background: red; */

  &:before {
    content: "";
    background: url("/images/2.jpg") center center / cover no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    /* opacity: 0.3; */
  }

  @media screen and (max-width: 768px) {
    height: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  @media screen and (max-width: 425px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
