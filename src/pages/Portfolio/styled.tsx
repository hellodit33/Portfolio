import styled from "styled-components";

export const Container = styled.div`
  color: black;
  font-size: 14px;
`;

export const WrapperContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  margin-left: 100px;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
`;

export const FirstWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 0.5fr;
`;

export const WrapperLinks = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;
export const Image = styled.img`
  width: 800px;
  height: 400px;
  border-radius: 30px;
  border: 1px solid white;
  margin: 10px 0px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.3);
`;

export const Link = styled.a`
  color: black;
  font-size: 20px;
`;

export const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  color: black;
  .fp-overflow {
    overflow-y: visible;
  }

  .fp-watermark {
    display: none;
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const Card = styled.div`
  border-radius: 30px;
  width: 150px;
  height: 200px;
  border: 2px solid white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  justify-self: center;
  text-align: center;
`;

export const FirstContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;

export const Title = styled.h1`
  display: flex;
  align-self: center;
  text-align-center;
  place-self:center;
  justify-content:center;
  align-items:center;
`;

export const ProjectTitle = styled.div`
  color: white;
  background-color: black;
  width: 15%;
  border-radius: 30px;
  margin-top: 10px;
  padding: 0px 20px;
  font-size: 22px;
`;

export const TechStack = styled.ul`
  color: black;
`;


export const ScrollContainer = styled.div`
display: flex;
flex-direction: row;
overflow-x: scroll;
height: 100vh;
margin:0px;
`;

export const FullSection = styled.section`
width: 100vw;
height: 100vh;
flex-shrink: 0;
`;