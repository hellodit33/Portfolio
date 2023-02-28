import styled, { keyframes } from "styled-components";

export const pulsingAnimation = keyframes`  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }`;

export const Container = styled.div`
  color: black;
  font-size: 14px;
`;
export const First = styled.div`
  display: grid;
  grid-template-columns: 0.3fr auto;
  column-gap: 100px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
    row-gap: 50px;
    text-align: center;
  }
`;
export const WrapperContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  margin-left: 100px;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
 
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    row-gap: 50px;
    margin-left: 0px;
    text-align: center;
  }
`;

export const FirstWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 0.5fr;
  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

export const SecondWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width:200px;
  background-color: white;
  padding:50px;
  align-items:center;
  border-radius: 60%;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 1100px) {
    width: 100%;
  }

`;
export const Image = styled.img`
  width: 800px;
  height: 400px;
  border-radius: 30px;
  border: 1px solid white;
  margin: 10px 0px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 1100px) {
    width: 100%;
    height: auto;
  }
`;
export const WorkImage = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 50%;

  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.3);

  &:hover {
    animation: pulse 2s infinite;

  }
}
@media screen and (max-width: 1100px) {
  width: 200px;
  height: 200px;
}
`;

export const ProjectImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 30%;
  
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.3);
  &:hover {
    animation: pulse 2s infinite;

  }
`;

export const Link = styled.a`
  color: black;
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
`;

export const Card = styled.div`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  animation: pulse 2s infinite;
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
  width: fit-content;
  border-radius: 30px;
  margin-top: 10px;
  padding: 0px 20px;
  font-size: 30px;
`;

export const TechStack = styled.ul`
  color: black;
 
`;

export const ScrollContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-y: hidden;
          scroll-snap-type: x mandatory;

  height: 100vh;
  margin: 0px;
  @media only screen and (max-width: 1100px) {
    scroll-snap-type: none;
    height: auto;
    overflow: visible;
  }
`;

export const FullSection = styled.section`
  width: 100vw;
  height: 100vh;
  flex-shrink: 0;
  flex: 0 0 100%;
  scroll-snap-align: start;

`;

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;

export const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 420px;
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 220px;
`;

export const ProjectHeader = styled.div`
  text-align: center;
`;

export const MainWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
`;

export const WorkHeader = styled.div`
  text-align: center;
`;

export const TechStackList=styled.ul`padding:0px;`

export const TechListItem=styled.li`font-size:18px;`
