import * as S from './styled';

type Card = {
  id: number;
  title: string;
  description: string;
};

type Props = {
  cards?: Card[];
};

const StackedCards = ({ cards }: Props) => {
  return (
    <S.StackedCardsContainer>
      {cards?.map((card) => (
        <S.StackedCard key={card.id}>
          <S.Card>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </S.Card>
        </S.StackedCard>
      ))}
    </S.StackedCardsContainer>
  );
};

export default StackedCards;