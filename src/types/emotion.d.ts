import '@emotion/react';

interface Colors {
  black0: string;
  black50: string;
  black100: string;
  black200: string;
  black300: string;
  black400: string;
  black500: string;
  black600: string;
  black700: string;
  black800: string;
  black900: string;
  primary1: string;
  primary2: string;
  primary3: string;
  secondary: string;
  red: string;
}

declare module '@emotion/react' {
  export interface Theme {
    colors: Colors;
  }
}
