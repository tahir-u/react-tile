import { generateArrayFromLength } from "../../utils";

export const zero = [
  false, true, true, true, false,
  false, true, false, true, false,
  false, true, false, true, false,
  false, true, false, true, false,
  false, true, true, true, false
];

export const one = [
  false, true, true, false, false,
  false, false, true, false, false,
  false, false, true, false, false,
  false, false, true, false, false,
  false, true, true, true, false
];

export const two = [
  false, true, true, true, false,
  false, false, false, true, false,
  false, true, true, true, false,
  false, true, false, false, false,
  false, true, true, true, false
];

export const three = [
  false, true, true, true, false,
  false, false, false, true, false,
  false, true, true, true, false,
  false, false, false, true, false,
  false, true, true, true, false
];

export const four = [
  false, true, false, true, false,
  false, true, false, true, false,
  false, true, true, true, false,
  false, false, false, true, false,
  false, false, false, true, false
];

export const five = [
  false, true, true, true, false,
  false, true, false, false, false,
  false, true, true, true, false,
  false, false, false, true, false,
  false, true, true, true, false
];

export const six = [
  false, true, true, true, false,
  false, true, false, false, false,
  false, true, true, true, false,
  false, true, false, true, false,
  false, true, true, true, false
];

export const seven = [
  false, true, true, true, false,
  false, false, false, true, false,
  false, false, false, true, false,
  false, false, false, true, false,
  false, false, false, true, false
];

export const eight = [
  false, true, true, true, false,
  false, true, false, true, false,
  false, true, true, true, false,
  false, true, false, true, false,
  false, true, true, true, false
];

export const nine = [
  false, true, true, true, false,
  false, true, false, true, false,
  false, true, true, true, false,
  false, false, false, true, false,
  false, true, true, true, false
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