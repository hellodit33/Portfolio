import styled from "styled-components";

type SpaceProps = {
  x?: number;
  horizontal?: boolean;
};

export const Space = styled.div<SpaceProps>`
  height: ${(props) => (!props.horizontal ? 10 * (props.x || 1) : 0)}px;
  width: ${(props) => (props.horizontal ? 10 * (props.x || 1) : 0)}px;
`;

export const Title = styled.p`
  font-size: 25px;
  color: white;
`;
export const Paragraph = styled.p`
  font-size: 14px;
  color: white;
`;
