import styled from 'styled-components';

export const Card = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border-radius: 8px;
  padding: 16px;
`;

export const StackedCard = styled.div`
  & + & {
    margin-top: 16px;
  }
`;

export const StackedCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
