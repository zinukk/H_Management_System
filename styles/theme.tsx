import { Theme } from '@emotion/react';

const color = {
  main: '#5655a5',
  sub: '#8887c0',
  background: '#f0f3fa',
  white: '#fff',
  black: '#000',
  critical: '#d9376d',
  major: '#406dfa',
  minor: '#299d38',
  stroke: '#e2e6f9',
};

const theme: Theme = {
  color: {
    main: color.main,
    sub: color.sub,
    background: color.background,
    white: color.white,
    black: color.black,
    critical: color.critical,
    major: color.major,
    minor: color.minor,
    stroke: color.stroke,
  },
};

export default theme;
