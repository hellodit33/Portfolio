import styled, { keyframes } from "styled-components";
import "animate.css";
import colors from "../../theme/colors";

export const Linkedin = styled.div`
  background-color: white;
  border-radius: 30px;
  width: fit-content;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px 30px;
  display: flex;
  flex-direction: row;
  font-size: 18px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  margin-bottom: 10px;
  margin-top: 20px;
  @media (max-width: 768px) {
    width: fit-content;
    padding: 10px;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: black;
`;

export const WorkParagraph = styled.p`
  border-top: 4px dashed;
  border-color: ${colors.orange} !important;
  margin: 0;
  padding: 30px;
  font-size: 17px;
  &:nth-child(even) {
    border-left: 2px dashed;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    margin-right: 30px;
    padding-right: 0;
  }

  &:nth-child(odd) {
    border-right: 2px dashed;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    margin-left: 30px;
    padding-left: 0;
  }

  &:first-child {
    border-top: 0;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }

  &:last-child {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export const SecondContainer = styled.div`
  margin-top: 100px;
  margin-left: 100px;
  margin-right: 100px;
  @media (max-width: 768px) {
    margin: 10px;
  }
`;

export const ThirdContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 0px;
  margin-top: 100px;
  @media (max-width: 1100px) {
    margin-top: 0px;
    display: flex;
    flex-direction: column;
  }
`;

export const FourthContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  margin-top: 100px;
  @media (max-width: 768px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const WorkContainer = styled.div`
  width: 900px;
  margin: auto;
  @media only screen and (max-width: 1100px) {
    width: 600px;
  }
  @media only screen and (max-width: 768px) {
    width: fit-content;
  }
`;

export const SubTitle = styled.div`
  font-size: 25px;
  color: white;
  background-color: #44703b;
  border-radius: 30px;
  font-weight: 900;
  letter-spacing: 5px;
  padding: 15px 0px 15px 15px;
  width: 30%;
  display: flex;
  flex-direction: row;
  height: 30px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.3);

  &:hover {
    animation: jello;
    animation-duration: 2s;
  }
`;

export const StudyTitle = styled.div`
  font-size: 25px;
  color: #44703b;
  font-weight: 900;
  letter-spacing: 5px;
`;

export const StudiesParagraph = styled.div`
  position: relative;
  padding: 1em;
  z-index: 5;
  width: 35%;
  font-size: 18px;
  border-radius: 30px;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.3);
  transition: 200ms ease-in-out;
  margin-top: 1em;

  &:hover {
    z-index: 11;
    transform: scale(1.05);
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.4);
  }
  &:first-of-type {
    margin-left: -13em;
    margin-top: 1em;
    background-color: ${colors.pink};
    height: fit-content;
    @media only screen and (max-width: 950px) {
      margin: 0px;
      margin-right: -5em;
    }
  }

  &:nth-of-type(2) {
    margin-left: 5em;
    margin-right: -5em;
    margin-top: -2em;
    background-color: ${colors.blue};
    height: fit-content;
    @media only screen and (max-width: 950px) {
      margin-top: -10em;
    }
    @media only screen and (max-width: 950px) {
      margin: -1em;
      margin-left: -5em;
    }
  }

  &:nth-of-type(3) {
    margin-top: -2em;
    margin-left: -4em;
    background-color: ${colors.purple};
    height: fit-content;
    @media only screen and (max-width: 950px) {
      margin: -1em;
      margin-right: -5em;
    }
  }

  &:nth-of-type(4) {
    margin-top: -2em;
    margin-left: 12em;
    background-color: ${colors.green};
    height: fit-content;
    @media only screen and (max-width: 950px) {
      margin: -1em;
      margin-left: -5em;
    }
  }

  @media only screen and (max-width: 1100px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
  @media only screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    width: 45%;
  }
`;

export const StudiesBody = styled.div`
  display: flex;
  margin: 0 10px 10px;
`;

export const StudiesP = styled.p`
  margin: 0 10px 0 0;
  white-space: pre-line;
  color: #c0c3d7;
  font-weight: 400;
  line-height: 1.5;
`;

export const StudiesContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 3em 27em;
  @media only screen and (max-width: 1250px) {
    margin: -1em 23em;
  }
  @media only screen and (max-width: 1100px) {
    margin: 0px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    place-self: center;
    justify-content: center;
    align-items: center;
  }
`;

const cardsAnimation = keyframes`
0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

export const LeisureImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 30%;
  justify-self: center;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.3);
  animation: ${cardsAnimation} 5s infinite;

  @media only screen and (max-width: 950px) {
    width: 150px;
    height: 150px;
  }
  @media only screen and (max-width: 768px) {
    width: 140px;
    height: 140px;
  }
`;
export const LeisureText = styled.p`
  width: 180px;
  height: 180px;
  border-radius: 30%;
  border: 2px solid white;
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: center;
  color: black;
  text-align: center;
  font-size: 15px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.3);
  @media only screen and (max-width: 950px) {
    width: 130px;
    height: 130px;
  }
  @media only screen and (max-width: 768px) {
    width: 120px;
    height: 120px;
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

export const WorkTag = styled.div`
  background-color: lightgray;
  width: fit-content;
  border-radius: 30px;
  padding: 10px;
  font-size: 20px;
  text-align: center;
  color: black;
  position: absolute;
  top: 200px;
  right: 180px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.3);
  @media only screen and (max-width: 1200px) {
    right: 100px;
  }
  @media only screen and (max-width: 950px) {
  }
  @media only screen and (max-width: 768px) {
    top: 350px;
    right: 300px;
  }
  @media only screen and (max-width: 650px) {
    top: 350px;
    right: 100px;
  }
  &:hover {
    animation: jello;
    animation-duration: 2s;
  }
`;

export const BoxTitle = styled.div`
  font-size: 23px;
  margin-bottom: 10px;
  font-family: "Libre Baskerville";
`;
const imageAnimation = keyframes`

  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

export const StudiesImage = styled.img`
  animation: ${imageAnimation} 5s infinite;

  width: 150px;
  height: 150px;
  z-index: 10;
  position: absolute;
  @media only screen and (max-width: 1300px) {
    width: 100px;
    height: 100px;
  }
  @media only screen and (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

export const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  scroll-snap-type: y mandatory;
  height: 100vh;
  margin: 0px;

  @media only screen and (max-width: 1100px) {
    scroll-snap-type: x mandatory;
    overflow-x: hidden;
    overflow-y: visible;
    min-height: 100vh;
    background-color: ${colors.green};
  }
`;

export const FullSection = styled.section`
  width: 100vw;
  height: 100vh;
  flex-shrink: 0;
  flex: 0 0 100%;
  scroll-snap-align: start;
  position: relative;

  @media only screen and (max-width: 1100px) {
    width: auto;
    height: auto;
  }
`;

export const Grid = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-top: 50px;
  margin-left: -50px;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 200px;
  row-gap: 200px;
  @media only screen and (max-width: 950px) {
    row-gap: 100px;
    column-gap: 100px;
  }
  @media only screen and (max-width: 768px) {
    row-gap: 100px;
    grid-template-columns: 1fr 1fr;
  }
`;

export const Message=styled.div`
display:flex;
align-self:center;
color:white;
justify-self:center;
`
