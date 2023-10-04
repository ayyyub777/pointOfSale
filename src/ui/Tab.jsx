import { styled } from "styled-components";

const Tab = styled.button`
  background-color: ${(props) =>
    props.$fill ? "var(--color-primary)" : "var(--color-base-dark-bg-2)"};
  color: ${(props) =>
    props.$fill ? "var(--color-white)" : "var(--color-primary)"};
  border: ${(props) =>
    props.$fill ? "none" : "solid 1.4px var(--color-base-dark-line)"};

  border-radius: 8px;
  padding: 0.4375rem 0.75rem;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4em;
  cursor: pointer;
`;

export default Tab;
