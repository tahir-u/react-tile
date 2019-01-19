import _ from 'lodash';

export const isNumber = (input) => {
  return typeof input === 'number';
}

export const isString = (input) => {
  return typeof input === 'string';
}

export const generateArrayFromLength = (length) => {
  return Array.apply(null, { length: length }).map(Function.call, Number);
}

export const normalizeStringNumber = (input) => {
  const numberMapping = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9
  };
  return _.includes(_.keys(numberMapping), input.toLowerCase()) ?
    numberMapping[input] :
    null;
}