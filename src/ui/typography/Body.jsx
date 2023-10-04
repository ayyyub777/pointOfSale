import { css, styled } from "styled-components";

const size = {
  small: css`
    font-size: 12px;
  `,
  medium: css`
    font-size: 14px;
  `,
  large: css`
    font-size: 16px;
  `,
};

const weight = {
  semiBold: css`
    font-weight: 600;
  `,
  medium: css`
    font-weight: 500;
  `,
  normal: css`
    font-weight: 400;
  `,
};

const Body = styled.p`
  line-height: 1.4em;
  color: ${(props) => props.$color};
  ${(props) => size[props.size]}
  ${(props) => weight[props.weight]}
`;

Body.defaultProps = {
  size: "medium",
  weight: "normal",
};

export default Body;
