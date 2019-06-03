import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${props => props.theme.fonts.primary};
    font-weight: ${props => props.theme.fontWeights.normal};
    font-size: ${props => props.theme.fontSizes.base};
    color: ${props => props.theme.colors.darkGrey};
  }
  *,*:after {
    box-sizing: border-box
  }
`;

export default GlobalStyle;
