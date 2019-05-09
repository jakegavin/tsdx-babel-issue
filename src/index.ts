import { kebabCase } from 'lodash';

export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log(kebabCase('foo bar'));
  }
  return a + b;
};
