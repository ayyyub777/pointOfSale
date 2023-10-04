import styled from "styled-components";

const Container = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  border-bottom: 1px solid var(--color-base-dark-line);
  padding-bottom: 0.8125rem;

  & ul {
    display: flex;
    flex-wrap: wrap;
  }
`;

const ListItem = styled.li`
  & span {
    margin-right: 2rem;
    padding-bottom: 0.7rem;

    &.active {
      color: var(--color-primary);
      border-bottom: 2px solid var(--color-primary);
    }
  }
`;

const Navigation = () => {
  return (
    <Container>
      <ul>
        <ListItem>
          <span className="active">Hot Dishes</span>
        </ListItem>
        <ListItem>
          <span>Cold Dishes</span>
        </ListItem>
        <ListItem>
          <span>Soup</span>
        </ListItem>
        <ListItem>
          <span>Grill</span>
        </ListItem>
        <ListItem>
          <span>Appetizer</span>
        </ListItem>
        <ListItem>
          <span>Dessert</span>
        </ListItem>
      </ul>
    </Container>
  );
};

export default Navigation;
