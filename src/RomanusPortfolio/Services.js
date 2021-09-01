import React from "react";
import styled from "styled-components";

const Services = () => {
  return (
    <Container>
      <Top>
        <Header>Services</Header>
      </Top>
      <Wrapper>
        <Holder>
          <Parent>
            <span></span>
            <Image src="/logo192.png" />
          </Parent>
          <Text>
            <Title>Front-End</Title>
            <Topic>
              Unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam.
            </Topic>
            <Button>get in touch</Button>
          </Text>
        </Holder>
        <Holder>
          <Parent>
            <span></span>
            <Image src="/images/node.png" />
          </Parent>
          <Text>
            <Title>Back-End</Title>
            <Topic>
              Unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam.
            </Topic>
            <Button>get in touch</Button>
          </Text>
        </Holder>
        <Holder>
          <Parent>
            <span></span>
            <Image src="/images/uiux.png" />
          </Parent>
          <Text>
            <Title>UI/UX</Title>
            <Topic>
              Unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam.
            </Topic>
            <Button>get in touch</Button>
          </Text>
        </Holder>
      </Wrapper>
    </Container>
  );
};

export default Services;

const Button = styled.div`
  margin-top: 20px;
  transition: all 350ms;
  cursor: pointer;
  font-size: 17px;

  :hover {
    color: red;
    margin: 10px;
  }
`;

const Topic = styled.div`
  max-width: 350px;
  text-align: center;
  margin-top: 15px;
  font-size: 17px;
  opacity: 0.6;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
  font-family: cursive;
  margin-top: 15px;
`;

const Top = styled.div`
  height: 10%;
  /* background-color: green; */
`;

const Header = styled.span`
  border-bottom: 1px solid black;
  font-size: 30px;
  /* background-color: green; */
  padding-bottom: 10px;
  font-weight: 600;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-top: -100px;
  flex-wrap: wrap;
  /* background: red; */

  @media screen and (max-width: 768px) {
    height: 100%;
    /* background: red; */
    margin-top: 50px;
  }
`;

const Holder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  position: absolute;
  width: 100px;
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    height: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

const Parent = styled.div`
  height: 200px;
  width: 200px;
  border: 1px solid black;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover > span {
    transform: scale(20);
    opacity: 1;
  }
  span {
    width: 10px;
    height: 10px;
    background: black;
    border-radius: 5px;
    transition: 350ms;
    opacity: 0;
  }
`;
