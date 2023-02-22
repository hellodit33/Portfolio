import styled from "styled-components";
import { Paragraph } from "../../components/common/styled";
import "animate.css";

export const Linkedin = styled.div`
  background-color: white;
  border-radius: 30px;
  width: 60%;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px 30px;
  display: flex;
  flex-direction: row;
  font-size: 18px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  margin-bottom: 10px;
`;

export const Link = styled.a`
text-decoration:none;
color:black;
}`;

export const WorkParagraph = styled.div`
  background-color: white;
  font-size: 17px;
  color: black;
  border-radius: 30px;
  padding: 20px;
  width: 60%;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #44703b;
    color: white;
  }
`;

export const SecondContainer = styled.div`
  display: grid;
  margin-top: 20px;
  grid-template-columns: 0.3fr auto;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
`;

export const ThirdContainer = styled.div`
  display: grid;
  margin-top: 100px;
  grid-template-columns: 2fr 1fr;
  margin-left: 100px;
  margin-right: 30px;
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  align-items: center;
  justify-content: center;
  align-content: center;
  margin: 10px;
`;

export const SubTitle = styled.div`
  font-size: 25px;
  color: white;
  background-color: #44703b;
  border-radius: 30px;
  font-weight: 900;
  letter-spacing: 5px;
  padding: 15px 0px 15px 15px;
  width: 150%;
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

export const StudiesParagraph = styled(Paragraph)`
  border: 1px solid white;
  padding: 10px;
  border-radius: 30px;
  height: 200px;
  width: 220px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #44703b;
    color: white;
  }
`;

export const StudiesContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 10px;
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
  width: 30%;
  border-radius: 30px;
  padding: 10px;
  font-size: 20px;
  text-align: center;
  color: black;
  margin-top: -60px;
  margin-left: 0px;
`;

export const BoxTitle = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;
