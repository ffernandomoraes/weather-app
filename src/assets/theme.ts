const unit = 4;

const spacing = (value = 1) => unit * value;

const CONTAINER = {
  small: 400,
  medium: 768
};

const colors = {
  title: 'white',
  description: '#c1c1c1',
  button: {
    main: '#0194ff',
    hover: '#0766ab'
  }
};

const transition = '0.15s linear';

interface ITheme {
  unit: typeof unit;
  spacing: typeof spacing;
  colors: typeof colors;
  transition: typeof transition;
  CONTAINER: typeof CONTAINER;
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
  CONTAINER
};

export default theme;
