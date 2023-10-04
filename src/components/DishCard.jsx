import { styled } from "styled-components";
import Body from "../ui/typography/Body.jsx";

const Container = styled.div`
  background-color: var(--color-base-dark-bg-2);
  position: relative;
  max-width: 12rem;
  min-width: 10rem;
  text-align: center;
  margin-top: 2.125rem;
  border-radius: 16px;
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -25%);
  width: 8.25rem;
  height: 8.25rem;
  border-radius: 100%;
`;

const Text = styled.div`
  padding: 7.125rem 1.5rem 1.5rem;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-top: 0.5rem;
`;

export default function DishCard() {
  return (
    <Container>
      <Img src="public/img1.jpg" />
      <Text>
        <Body weight="medium">Spicy seasoned seafood noodles</Body>
        <Details>
          <Body>$2.29</Body>
          <Body $color="var(--color-text-light)">20 Bowls available</Body>
        </Details>
      </Text>
    </Container>
  );
}
