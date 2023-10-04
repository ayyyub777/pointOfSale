import { css, styled } from "styled-components";

const size = {
  large: css`
    font-size: 32px;
    font-weight: 700;
    line-height: 1.4em;
  `,
  small: css`
    font-size: 20px;
    font-weight: 400;
    line-height: 1.2em;
  `,
};

const Display = styled.span`
  ${(props) => size[props.size]}
`;

Display.defaultProps = {
  size: "large",
};

export default Display;
