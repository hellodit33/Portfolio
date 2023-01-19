import styled from "styled-components";

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
