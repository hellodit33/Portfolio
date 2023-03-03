import styled from "styled-components";
import colors from "../../theme/colors";

type SpaceProps = {
  x?: number;
  horizontal?: boolean;
};

export const Space = styled.div<SpaceProps>`
  height: ${(props) => (!props.horizontal ? 10 * (props.x || 1) : 0)}px;
  width: ${(props) => (props.horizontal ? 10 * (props.x || 1) : 0)}px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  column-gap: 0px;
  margin: 0px 200px 0px 200px;
  @media only screen and (max-width: 950px) {
    margin: 0px 30px;
  }
  @media only screen and (max-width: 768px) {
    margin: 30px;
  }
`;

export const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: black;
`;

export const TextContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  color: black;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ColumnLinks = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
`;
export const Image = styled.img`
  position: relative;
  width: 550px;
  height: 510px;
  border-radius: 30%;
  justify-self: center;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.3);

  @media only screen and (max-width: 950px) {
    width: 400px;
    height: 380px;
  }
  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 280px;
  }
  @media only screen and (max-width: 300px) {
    width: 200px;
    height: 180px;
  }
`;

export const Title = styled.p`
  font-size: 70px;
  color: black;
  font-weight: 900;
  letter-spacing: 5px;
  margin: 5px;
  font-family: "Walter Turncoat", cursive;
  @media only screen and (max-width: 1200px) {
    font-size: 55px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 40px;
  }
`;
export const Paragraph = styled.div`
  font-size: 18px;
  color: black;
  width: 70%;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
  @media screen and (max-width: 375px) {
    font-size: 12px;
  }
`;

export const FrontParagraph = styled.div`
  font-size: 18px;
  color: black;
  width: 100%;
  @media screen and (max-width: 950px) {
    font-size: 15px;
  }
  @media screen and (max-width: 375px) {
    font-size: 12px;
  }
`;

export type LinkProps = { column?: boolean };

export const LinkContainer = styled.ul<LinkProps>`
  list-style-type: none;
  display: flex;
  justify-content: center;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  padding: 0px;
`;

export const LinkList = styled.li`
  padding: 10px;
`;

export const Links = styled.a`
  color: black;
  font-size: 40px;
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

export const SectionTitle = styled.h1`
  display: flex;
  font-size:30px;
  text-transform:uppercase;
  align-self: center;
  text-align-center;
  place-self:center;
  justify-content:center;
  align-items:center;
  letter-spacing:5px;
  font-family: "Walter Turncoat", cursive;
  @media only screen and (max-width: 768px) {
    margin-bottom:0px;
  }
`;

export const Subtitle = styled.div`
  display: flex;
  font-size:20px;
  font-family: 'Libre Baskerville';

  align-self: center;
  text-align-center;
  place-self:center;
  justify-content:center;
  align-items:center;
  letter-spacing:5px;
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
    background-color: ${colors.green_highlight};
  }
`;
export const FullSection = styled.section`
  width: 100vw;
  height: 100vh;
  flex-shrink: 0;
  flex: 0 0 100%;
  scroll-snap-align: start;
`;

export const ArrowContainer = styled.div`
  height: 100vh;
  padding: 20px;
  text-align: center;
  @media only screen and (max-width: 1100px) {
    display:none;
  }
`;

export const ArrowContent = styled.div`
  position: absolute;
  left: 50%;
  top: 95%;
  transform: translate(-50%, -50%);
`;

export const Arrows = styled.div`
  width: 75px;
  height: 65px;
  &:hover {
    polygon {
      fill: #fff;
      transition: all 0.2s ease-out;

      &.arrow-bottom {
        transform: translateY(-18px);
      }

      &.arrow-top {
        transform: translateY(18px);
      }
    }
  }
  polygon {
    fill: #fff;
    transition: all 0.2s ease-out;

    &.arrow-middle {
      opacity: 0.75;
    }

    &.arrow-top {
      opacity: 0.5;
    }
  }
`;
