import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      lighterPurple: string;
      lightPurple: string;
      purple: string;
      grey: string;
      darkGrey: string;
      silver: string;
      white: string;
      prefill: string;
      delete: string;
    };
    fonts: {
      primary: string;
    };
    fontSizes: {
      xsmall: string;
      small: string;
      base: string;
    };
    transitions: {
      all: string;
    };
    spacing: {
      xsmall: string;
      small: string;
      medium: string;
    };
    fontWeights: {
      normal: number;
      bold: number;
    };
  }
}
