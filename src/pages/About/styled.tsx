import styled from "styled-components";
import { Paragraph } from "../../components/common/styled";
import "animate.css";
import colors from "../../theme/colors";

export const Linkedin = styled.div`
  background-color: white;
  border-radius: 30px;
  width: 80%;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px 30px;
  display: flex;
  flex-direction: row;
  font-size: 18px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  margin-bottom: 10px;
  margin-top:20px;
`;

export const Link = styled.a`
text-decoration:none;
color:black;
`;

export const WorkParagraph = styled.p`
border-top: 4px dashed;
  border-color: ${colors.pink} !important;
  margin:0; padding: 30px;



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
    border-top-right-radius:0;
    border-top-left-radius:0;
  }
  
  &:last-child {
    border-bottom-right-radius:0;
    border-bottom-left-radius:0;
  }
`;

export const SecondContainer = styled.div`
  margin-top:100px;
  margin-left:100px;
  margin-right:100px;
`;

export const ThirdContainer = styled.div`
  display: grid;
  margin-top: 100px;
  grid-template-columns: 1fr;
  column-gap: 0px;
`;

export const FourthContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
`;

export const WorkContainer = styled.div`
width:900px;
margin:auto;
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
  background-color: ${colors.pink};
  padding: 1em;
  z-index: 5;
  width:40%;
  font-size:18px;
  border-radius: 30px;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.3);
  transition: 200ms ease-in-out;
  margin-top: 1em;

&:hover {
  z-index: 8;
  transform: scale(1.05);
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.4);
}
&:first-of-type {
  margin-left: -13em;
  margin-top: 1em;
}
@media (max-width: 705px) {
  &:first-of-type {
    margin-left: -1em;
    margin-right: 1em;
  }
}
@media (max-width: 550px) {
  &:first-of-type {
    margin: 0;
  }
}
&:nth-of-type(2) {
  margin-left: 5em;
  margin-right: -5em;
  margin-top: -2em;
}
@media (max-width: 705px) {
  &:nth-of-type(2) {
    margin-left: 1em;
    margin-right: -1em;
    margin-top: 1em;
  }
}
@media (max-width: 550px) {
  &:nth-of-type(2) {
    margin: 1em 0 0;
  }
}
&:nth-of-type(3) {
  margin-top: -2em;
  margin-left: -4em;
}
@media (max-width: 705px) {
  &:nth-of-type(3) {
    margin-left: -1em;
    margin-right: 1em;
    margin-top: 1em;
  }
  &:nth-of-type(3):after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1em;
    display: block;
    border-bottom: 5px solid rgba(192, 57, 43, 0.6);
  }
}
@media (max-width: 550px) {
  &:nth-of-type(3) {
    margin: 1em 0 0;
  }
}
&:nth-of-type(3) {
  margin-top: -2em;
  margin-left: -4em;
}
&:nth-of-type(4) {
margin-top: -2em;
margin-left: 12em;
}
`;

export const StudiesBody=styled.div`
display: flex;
margin: 0 10px 10px;


`

export const StudiesP=styled.p` margin: 0 10px 0 0;
white-space: pre-line;
color: #c0c3d7;
font-weight: 400;
line-height: 1.5;`

export const StudiesContainer = styled.div`

  position: relative;
  width: 100%;
  margin: 1em 27em;
  @media (max-width: 705px) {
      margin: 4em auto;
  }
`;

export const LeisureImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 30%;
  justify-self: center;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.3);
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
  width: 10%;
  border-radius: 30px;
  padding: 10px;
  font-size: 20px;
  text-align: center;
  color: black;
  position:absolute;
top:200px;  right:150px;
box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.3);

`;

export const BoxTitle = styled.div`
  font-size: 23px;
  margin-bottom: 10px;
    font-family: 'Cardo';

`;
