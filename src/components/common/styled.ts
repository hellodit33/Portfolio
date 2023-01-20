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
  grid-template-columns: 1fr 1fr;
  margin: 40px 100px;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  margin: 40px 100px;
  flex-direction: column;
  color: white;
`;
export const Image = styled.img`
  width: 280px;
  height: 300px;
  border-radius: 10px;
  justify-self: center;
`;

export const Title = styled.p`
  font-size: 25px;
  color: white;
`;
export const Paragraph = styled.p`
  font-size: 18px;
  color: white;
`;
