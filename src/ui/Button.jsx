import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) =>
    props.$fill ? "var(--color-primary)" : "transparent"};
  color: ${(props) =>
    props.$fill ? "var(--color-base-bg)" : "var(--color-primary)"};
  border: ${(props) =>
    props.$fill ? "none" : "solid 1.4px var(--color-primary)"};

  border-radius: 8px;
  padding: 0.875rem;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
`;

export default Button;
