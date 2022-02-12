const unit = 4;

const spacing = (value = 1) => unit * value;

const container = {
  SMALL: 400,
  MEDIUM: 768
};

const colors = {
  title: 'white',
  description: '#c1c1c1',
  button: {
    main: '#0194ff',
    hover: '#0766ab'
  },
  success: '#3c883f',
  error: '#b32e2e'
};

const transition = '0.15s linear';

const breakpoints = {
  mobile: '@media screen and (max-width: 768px)'
};

interface ITheme {
  unit: typeof unit;
  spacing: typeof spacing;
  colors: typeof colors;
  transition: typeof transition;
  container: typeof container;
  breakpoints: typeof breakpoints;
}

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface Theme extends ITheme {}
}

const theme: ITheme = {
  unit,
  spacing,
  colors,
  transition,
  container,
  breakpoints
};

export default theme;
