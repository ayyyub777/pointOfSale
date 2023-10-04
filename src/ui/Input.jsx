import { css, styled } from "styled-components";

const Input = styled.input`
  ${(props) =>
    props.type === "number" &&
    css`
      width: 48px;
      height: 48px;
      text-align: center;
    `}
  ${(props) =>
    props.type === "text" &&
    css`
      width: calc(100% - 28px);
      padding: 14px;
    `}
  font-size: 14px;
  line-height: 1.4em;

  border: 1px solid var(--color-base-dark-line);
  background-color: var(--color-base-form-bg);
  color: var(--color-text-lighter);
  border-radius: 8px;
  &::placeholder {
    color: var(--color-text-gray);
  }
  &:focus {
    outline: none;
  }
`;

export default Input;
