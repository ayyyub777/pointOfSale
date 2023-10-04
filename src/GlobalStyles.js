import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --color-primary : #EA7C69;
  --color-secondary : #9288E0;
  --color-white : #fff;
  --color-text-dark : #3B5162;
  --color-text-gray : #889898;
  --color-text-light : #ABBBC2;
  --color-text-lighter : #E0E6E9;
  --color-base-bg : #FAFAFA;
  --color-base-dark-line : #393C49;
  --color-base-dark-bg-1 : #252836;
  --color-base-dark-bg-2 : #1F1D2B;
  --color-base-form-bg : #2D303E;
  --color-accesnt-green : #50D1AA;
  --color-accent-red : #FF7CA3;
  --color-accent-orange : #FFB572;
  --color-accent-blue : #65B0F6;
  --color-accent-purple : #9290FE;
}
body {
    font-family: Barlow;
    color : var(--color-white);
    background-color : var(--color-base-dark-bg-1);
}
`;
export default GlobalStyles;
