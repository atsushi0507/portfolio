import styled from "styled-components";
import PrimaryButton from "../atoms/PrimaryButton";

const Content = () => {
    const cards = [
        { id: 1, image: 'https://unsplash.it/300/300', title: 'Card 1' },
        { id: 2, image: 'https://unsplash.it/300/301', title: 'Card 2' },
        { id: 3, image: 'https://unsplash.it/300/302', title: 'Card 3' },
        { id: 4, image: 'https://unsplash.it/300/303', title: 'Card 4' },
        { id: 5, image: 'https://unsplash.it/300/304', title: 'Card 5' },
        { id: 6, image: 'https://unsplash.it/300/305', title: 'Card 6' },
      ];
    return (
        <ContentContainer>
        <Tabs>
            <Tab active>All</Tab>
            <Tab>My Works</Tab>
            <Tab>My Projects</Tab>
            <Tab>Followers</Tab>
            <Tab>Connections</Tab>
            <Tab>Recent</Tab>
        </Tabs>
        <CardsContainer>
            {cards.map(card => (
            <Card key={card.id} onClick={() => window.open('#', '_blank')}>
                <CardImage src={card.image} alt={card.title} />
                <CardContent>{card.title}</CardContent>
            </Card>
            ))}
        </CardsContainer>
        <PrimaryButton>Load More</PrimaryButton>
        </ContentContainer>
    );
};

export default Content;

const Card = styled.div`
  width: calc(33.333% - 20px);
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.02);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardContent = styled.div`
  padding: 10px;
`;

const Tab = styled.div`
  cursor: pointer;
  padding: 10px 20px;
  border-bottom: 2px solid ${props => (props.active ? '#000' : 'transparent')};
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

const Tabs = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;