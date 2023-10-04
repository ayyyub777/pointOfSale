import { css, styled } from "styled-components";

const size = {
  large: css`
    width: 24px;
    height: 24px;
  `,
  medium: css`
    width: 20px;
    height: 20px;
  `,
  small: css`
    width: 16px;
    height: 16px;
  `,
  tiny: css`
    width: 14px;
    height: 14px;
  `,
};

const Icon = styled.i`
  ${(props) => size[props.size]}
`;

Icon.defaultProps = {
  size: "medium",
};

export default Icon;
