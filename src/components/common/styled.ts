import styled from "styled-components";

type SpaceProps = {
  x?: number;
  horizontal?: boolean;
};

export const Space = styled.div<SpaceProps>`
  height: ${(props) => (!props.horizontal ? 10 * (props.x || 1) : 0)}px;
  width: ${(props) => (props.horizontal ? 10 * (props.x || 1) : 0)}px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;
  justify-content: center;
  place-items: center;
  column-gap: 0px;
  margin: 0px 200px 0px 200px;
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
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ColumnLinks = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;
export const Image = styled.img`
  position: relative;
  width: 550px;
  height: 510px;
  border-radius: 30%;
  justify-self: center;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.3);
`;

export const Title = styled.p`
  font-size: 70px;
  color: black;
  font-weight: 900;
  letter-spacing: 5px;
  margin: 5px;
  font-family: 'Cardo';

`;
export const Paragraph = styled.div`
  font-size: 18px;
  color: black;
  width: 60%;
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
  align-self: center;
  text-align-center;
  place-self:center;
  justify-content:center;
  align-items:center;
  font-family: 'Cardo';

`;