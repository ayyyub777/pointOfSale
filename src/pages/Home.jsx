import { styled } from "styled-components";
import { useEffect, useState } from "react";
import Heading from "../ui/typography/Heading";
import Body from "../ui/typography/Body";
import Navigation from "../components/Navigation";
import Select from "../components/Select";
import DishCard from "../components/DishCard";
import OrderItem from "../components/OrderItem";
import Tab from "../ui/Tab";
import Button from "../ui/Button";
import useMenu from "../hooks/useMenu";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 25.5625rem;
  height: 100vh;
`;

const Main = styled.main`
  margin: 0 auto;
  width: 39.5625rem;
  padding: 0 1.5rem 1.5rem;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding-top: 1.5rem;
  gap: 1.5rem;
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: var(--color-base-dark-bg-1);
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const PageTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  row-gap: 1.5rem;
`;

const Aside = styled.aside`
  background-color: var(--color-base-dark-bg-2);
`;

const AsideContainer = styled.div`
  position: fixed;
  top: 0;
`;

const AsideGrid = styled.div`
  display: grid;
  grid-template-rows: min-content 1px auto 1px 12.5rem;
  height: 100vh;
`;

const OrderTitle = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Options = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Content = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow-y: scroll;
`;

const Total = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Divider = styled.div`
  margin: 0 1.5rem;
  height: 1px;
  background-color: var(--color-base-dark-line);
`;

const OrderLabels = styled.div`
  display: grid;
  grid-template-columns: 15rem 3rem 4rem;
  text-align: right;
`;

const Item = styled.div`
  text-align: left;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function Home() {
  const { menu } = useMenu();

  return (
    <Grid>
      <Main>
        <Header>
          <Title>
            <Heading as="h1">Jaegar Resto</Heading>
            <Body size="large">Tuesday, 2 Feb 2021</Body>
          </Title>
          <Navigation />
        </Header>
        <Container>
          <PageTitle>
            <Heading as="h2">Choose Dishes</Heading>
            <Select />
          </PageTitle>
          <Cards>
            {menu.map((item) => (
              <DishCard key={item.id} item={item} />
            ))}
          </Cards>
        </Container>
      </Main>
      <Aside>
        <AsideContainer>
          <AsideGrid>
            <OrderTitle>
              <Heading as="h2">Orders #34562</Heading>
              <Options>
                <Tab $fill>Dine In</Tab>
                <Tab>To Go</Tab>
                <Tab>Delivery</Tab>
              </Options>
              <OrderLabels>
                <Item>
                  <Body size="large" weight="semiBold">
                    Item
                  </Body>
                </Item>
                <Body size="large" weight="semiBold">
                  Qty
                </Body>
                <Body size="large" weight="semiBold">
                  Price
                </Body>
              </OrderLabels>
            </OrderTitle>
            <Divider />
            <Content>
              <OrderItem />
              <OrderItem />
              <OrderItem />
              <OrderItem />
              <OrderItem />
            </Content>
            <Divider />
            <Total>
              <Details>
                <Row>
                  <Body $color="var(--color-text-light)">Discount</Body>
                  <Body size="large" weight="medium">
                    $0
                  </Body>
                </Row>
                <Row>
                  <Body $color="var(--color-text-light)">Sub total</Body>
                  <Body size="large" weight="medium">
                    $ 21,03
                  </Body>
                </Row>
              </Details>
              <Button $fill>Continue to Payment</Button>
            </Total>
          </AsideGrid>
        </AsideContainer>
      </Aside>
    </Grid>
  );
}
