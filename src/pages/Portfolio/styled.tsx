import styled, { keyframes } from "styled-components";
import colors from "../../theme/colors";

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
    column-gap: 50px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 40px;
    text-align: center;
  }
  @media screen and (max-width: 375px) {
    grid-template-columns: 1fr;
    row-gap: 10px;
    text-align: center;
  }
`;
export const WrapperContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  margin-left: 30px;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
  column-gap: 50px;

  @media screen and (max-width: 1200px) {
    margin-left: 20px;
    margin-top: 70px;
  }
  @media screen and (max-width: 768px) {
    grid-template-rows: 1fr auto;
    grid-template-columns: 1fr;
    row-gap: 20px;
  }
`;
export const WrapperFrontContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  margin: 30px;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media screen and (max-width: 950px) {
    margin-top: 70px;
    grid-template-rows: 1fr auto;
    grid-template-columns: 1fr;
    row-gap: 20px;
  }
`;

export const FirstWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 0.5fr;
  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;
export const FirstFrontWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 0.5fr;
  align-self: center;
  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

export const NotesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  background-color: #fefae0;
  padding: 20px;
  align-items: center;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 768px) {
    font-size: 13px;
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
    width: 600px;
    height: 300px;
  }
  @media screen and (max-width: 950px) {
    width: 500px;
    height: 250px;
  }
  @media screen and (max-width: 768px) {
    width: 340px;
    height: 180px;
  }
  @media screen and (max-width: 375px) {
    width: 200px;
    height: 100px;
  }
`;

export const FrontImage = styled.img`
  width: 500px;
  height: 250px;
  border-radius: 30px;
  border: 1px solid white;
  margin: 10px 0px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 1100px) {
    width: 340px;
    height: 180px;
  }
  @media screen and (max-width: 950px) {
    width: 200px;
    height: 100px;
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

  @media screen and (max-width: 1200px) {
    width: 300px;
    height: 300px;
  }

  @media screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
  @media screen and (max-width: 575px) {
    width: 100px;
    height: 100px;
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
  @media screen and (max-width: 1200px) {
    width: 150px;
    height: 150px;
  }
  @media screen and (max-width: 1100px) {
    width: 140px;
    height: 140px;
  }

  @media screen and (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

export const Link = styled.a`
  color: black;
`;

export const LinkImage = styled.img`
  width: fit-content;
  height: 40px;
  @media screen and (max-width: 768px) {
    width: fit-content;
    height: 30px;
  }
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

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
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
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
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
    overflow-x: visible;
    overflow-y: hidden;
    background-color: ${colors.beige};
  }
`;

export const FullSection = styled.section`
  width: 100vw;
  height: 100vh;
  flex-shrink: 0;
  flex: 0 0 100%;
  scroll-snap-align: start;
  @media only screen and (max-width: 1100px) {
    width: auto;
    height: auto;
  }
`;

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;

    gap: 5px;
  }

  @media screen and (max-width: 950px) {
    grid-template-columns: 1fr 1fr;

    gap: 5px;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 220px;
  @media screen and (max-width: 950px) {
    gap: 5px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ProjectHeader = styled.div`
  text-align: center;
  @media screen and (max-width: 950px) {
    font-size: 14px;
    width: 100%;
  }
  @media screen and (max-width: 375px) {
    font-size: 10px;
  }
`;

export const MainWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 950px) {
    margin-top: 50px;
  }
`;

export const WorkHeader = styled.div`
  text-align: center;
  @media screen and (max-width: 950px) {
    font-size: 14px;
    width: 50%;
  }
`;

export const TechStackList = styled.ul`
  padding: 0px;
  font-family: "Walter Turncoat", cursive;
  font-size: 1.5em;
  @media screen and (max-width: 375px) {
    font-size: 1em;
  }
`;

export const TechListTitle = styled.div`
  text-decoration: underline;
`;
export const TechListItem = styled.li`
  display: block;
  line-height: 1.001em;
  color: #37373c;
`;

export const SecondWrapper = styled.div`
  width: fit-content;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: row;
  }
`;
export const SecondFrontWrapper = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    flex-direction: row;
  }
`;

export const FrontGrid = styled.div``;

const fadein = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const arrowbounce = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const ArrowWrapper = styled.div`
  animation: ${fadein} 0.5s ease-in-out 3s forwards;
`;

export const ArrowIcon = styled.div`
  cursor: pointer;
  height: 10px;
  right: 1%;
  position: absolute;
  top: 50%;
  width: 30px;
  animation: ${arrowbounce} 1s ease-in-out infinite;

  @media screen and (max-width: 950px) {
    width: 20px;
  }
  @media screen and (max-width: 768px) {
    width: 10px;
  }
`;
export const ArrowIconTop = styled.div`
  background-color: #666;
  height: 4px;
  left: -5px;
  position: absolute;
  top: 50%;
  width: 100%;
  $transition-time: 0.15s;

  &:after {
    background-color: #fff;
    content: "";
    height: 100%;
    position: absolute;
    top: 0;
    transition: all $transition-time;
  }
  transform: rotate(45deg);
  transform-origin: bottom right;

  &:after {
    left: 100%;
    right: 0;
    transition-delay: 0s;
    &:hover {
      left: 0;
      transition-delay: $transition-time;
    }
  }
`;

export const ArrowIconBottom = styled.div`
  background-color: #666;
  height: 4px;
  left: -5px;
  position: absolute;
  top: 50%;
  width: 100%;

  &:after {
    background-color: #fff;
    content: "";
    height: 100%;
    position: absolute;
    top: 0;
    transition: all $transition-time;
  }

  transform: rotate(-45deg);
  transform-origin: top right;

  &:after {
    left: 0;
    right: 100%;
    transition-delay: $transition-time;

    &:hover {
      left: 0;
      transition-delay: $transition-time;
    }
  }
`;
