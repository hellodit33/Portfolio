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
  justify-content: center;
  align-items: center;
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
  grid-template-columns: 1fr 1fr;
  margin: 50px 10px 0px 150px;
  color: black;
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
  width: 400px;
  height: 400px;
  border-radius: 30%;
  justify-self: center;
`;

export const Title = styled.p`
  font-size: 70px;
  color: black;
  font-weight: 900;
  letter-spacing: 5px;
  margin: 5px;
`;
export const Paragraph = styled.p`
  font-size: 18px;
  color: black;
  width: 70%;
`;

export const LinkContainer = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0px;
`;

export const LinkList = styled.li`
  padding: 10px;
`;

export const Links = styled.a`
  color: black;
  font-size: 40px;
`;
