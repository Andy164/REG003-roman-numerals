import { isNotValidChar, isRepeated, isInvalidSubstraction } from './lib/validations';

/**
 * Convert an Arabic number to a Roman numeral
 * @param num An arabic number
 * @returns The calculated Roman numeral
 */
export const stringify = (num: number): String => {
  const numerals: Array<[number, string]> = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];

  let romanNumber: string = '';
  let counter: number = num;

  if (num < 1 || num > 3999) throw new Error('Out of range');

  numerals.forEach((numeral) => {
    while (numeral[0] <= counter) {
      romanNumber += numeral[1];
      counter -= numeral[0];
    }
  });

  return romanNumber;
};

/**
 * Parse a Roman numeral and return its value in Arabic number
 * @param str A Roman numeral
 * @returns An Arabic number
 */
export const parse = (str: string): Number => {
  const numerals: Record<string, number> = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  // Validate input Roman numeral
  if (isNotValidChar(str)) throw new Error('Unknown roman numeral');

  const baseFiveInvalidlyRepeated = isRepeated(str, 'five', numerals);
  if (baseFiveInvalidlyRepeated) throw new Error(baseFiveInvalidlyRepeated);

  const baseTenInvalidlyRepeated = isRepeated(str, 'ten', numerals);
  if (baseTenInvalidlyRepeated) throw new Error(baseTenInvalidlyRepeated);

  // Group equal characters
  const regExp = /([MDCLXVI])\1*/gi;
  const arrRomanNumerals = str.toUpperCase().match(regExp) ?? [];

  let numLeft: number;
  let numRight: number;
  let romanLeft: string;
  let romanRight: string;

  let result = 0;

  // Read and calculate
  for (let i = 0; i < arrRomanNumerals.length; i++) {
    romanLeft = arrRomanNumerals[i];
    romanRight = arrRomanNumerals[i + 1];

    numLeft = numerals[romanLeft.charAt(0)] * romanLeft.length;
    numRight = numerals[romanRight];

    if (result % 10 && i > 1) throw new Error('Invalid roman numeral');

    if (numLeft < numRight) {
      const invalidSUB = isInvalidSubstraction([romanLeft, romanRight], numerals);
      if (invalidSUB) throw new Error(invalidSUB);

      result += numRight - numLeft;

      i += 1;
    } else {
      result += numLeft;
    }
  }

  return result;
};
