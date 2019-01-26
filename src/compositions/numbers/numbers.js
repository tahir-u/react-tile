import { generateArrayFromLength } from "../../utils";

export const zero = [
  false, false, false, true, true, false, false, false,
  false, false, true, false, false, true, false, false,
  false, false, true, false, false, true, false, false,
  false, false, true, false, false, true, false, false,
  false, false, true, false, false, true, false, false,
  false, false, true, false, false, true, false, false,
  false, false, true, false, false, true, false, false,
  false, false, false, true, true, false, false, false,
];

export const one = [
  false, false, false, false, true, false, false, false,
  false, false, false, true, true, false, false, false,
  false, false, false, false, true, false, false, false,
  false, false, false, false, true, false, false, false,
  false, false, false, false, true, false, false, false,
  false, false, false, false, true, false, false, false,
  false, false, false, false, true, false, false, false,
  false, false, false, true, true, true, false, false
];

export const two = [
  false, false, true, true, true, true, false, false,
  false, true, true, false, false, true, true, false,
  false, false, false, false, false, true, true, false,
  false, false, false, false, true, true, false, false,
  false, false, false, true, true, false, false, false,
  false, false, true, true, false, false, false, false,
  false, true, true, false, false, false, false, false,
  false, true, true, true, true, true, true, false,
];

export const three = [
  false, false, false, true, true, true, false, false,
  false, false, true, false, false, false, true, false,
  false, false, false, false, false, false, true, false,
  false, false, false, false, true, true, false, false,
  false, false, false, false, false, false, true, false,
  false, false, false, false, false, false, true, false,
  false, false, true, false, false, false, true, false,
  false, false, false, true, true, true, false, false
];

export const four = [
  false, false, false, false, true, true, false, false,
  false, false, false, true, true, true, false, false,
  false, false, true, false, true, true, false, false,
  false, true, false, false, true, true, false, false,
  true, true, true, true, true, true, true, false,
  false, false, false, false, true, true, false, false,
  false, false, false, false, true, true, false, false,
  false, false, false, true, true, true, true, false
];

export const five = [
  false, true, true, true, true, true, true, false,
  false, true, false, false, false, false, false, false,
  false, true, false, false, false, false, false, false,
  false, false, true, true, true, true, false, false,
  false, false, false, false, false, false, true, false,
  false, false, false, false, false, false, true, false,
  false, false, false, false, false, true, false, false,
  false, true, true, true, true, false, false, false
];

export const six = [
  false, false, true, true, true, true, false, false,
  false, true, false, false, false, false, false, false,
  false, true, false, false, false, false, false, false,
  false, true, false, false, false, false, false, false,
  false, true, true, true, true, true, true, false,
  false, true, false, false, false, false, true, false,
  false, true, false, false, false, false, true, false,
  false, false, true, true, true, true, false, false
];

export const seven = [
  false, true, true, true, true, true, false, false,
  false, false, false, false, false, false, true, false,
  false, false, false, false, false, true, false, false,
  false, false, false, false, true, false, false, false,
  false, false, false, true, false, false, false, false,
  false, false, false, true, false, false, false, false,
  false, false, false, true, false, false, false, false,
  false, false, false, true, false, false, false, false,
];

export const eight = [
  false, false, false, true, true, false, false, false,
  false, false, true, false, false, true, false, false,
  false, false, true, false, false, true, false, false,
  false, false, false, true, true, false, false, false,
  false, false, true, false, false, true, false, false,
  false, false, true, false, false, true, false, false,
  false, false, true, false, false, true, false, false,
  false, false, false, true, true, false, false, false
];

export const nine = [
  false, false, true, true, true, true, false, false,
  false, true, false, false, false, false, true, false,
  false, true, false, false, false, false, true, false,
  false, true, false, false, false, false, true, false,
  false, false, true, true, true, true, true, false,
  false, false, false, false, false, false, true, false,
  false, false, false, false, false, false, true, false,
  false, false, true, true, true, true, false, false,
];

export const numbers = [zero, one, two, three, four, five, six, seven, eight, nine];

export const integerNumbers = generateArrayFromLength(10); // For card contents

export const stringNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

export const numberCardContents = [
  {
    title: 'Numbers',
    contents: [...integerNumbers, ...stringNumbers]
  }
];