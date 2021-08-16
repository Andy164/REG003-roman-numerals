import Basis from './interfaces';

/**
 * Validate Roman numeral characters
 * @param str Roman numeral to validate
 * @returns A boolean
 */
export const isNotValidChar = (str: string): Boolean => {
  const regExp = /[^MDCLXVI]/gi;
  const result = regExp.test(str);

  return result || !str.length;
};

/**
 * Validate repeating characters invalidly
 * @param str Roman numeral to validate
 * @param base Basis of the numbering system
 * @param numerals Basic Roman numerals
 * @returns A string describing the error
 */
export const isRepeated = (str: string, base: string, numerals: Record<string, number>): string => {
  const bases: Record<string, Basis> = {
    five: {
      regExp: /([DLV])\1+/gi,
      repeatsAllowed: 1,
      error: 'Invalid repetition of number starting with 5: ',
    },
    ten: {
      regExp: /([IXCM])\1+/gi,
      repeatsAllowed: 3,
      error: 'Too many repetitions of roman numeral(s): ',
    },
  };

  const { regExp, repeatsAllowed } = bases[base];
  let { error } = bases[base];

  const matched = new Set(str.match(regExp));

  const result = Array.from(matched);

  const groups = result?.filter((group) => group.length > repeatsAllowed);

  if (groups?.length) {
    groups.forEach((element: String): void => {
      error += `${element.charAt(0)} (${numerals[element.toLocaleUpperCase().charAt(0)]}), `;
    });
  } else error = '';

  return error;
};

/**
 * Validate the subtraction
 * @param left The current character in the iterable
 * @param right The next character
 * @param numerals Basic Roman numerals
 * @returns A string describing the error
 */
export const isInvalidSubstraction = (arrRomans: string[], numerals: Record<string, number>): string => {
  const [left] = arrRomans;

  const regExp = /[DLV]/gi;
  const isBaseFive = regExp.test(left);

  const validSubstraction = arrRomans.join('').toLocaleUpperCase() in numerals;

  return isBaseFive
    ? `Invalid substraction prefix ${left.charAt(0)}`
    : !validSubstraction
    ? 'Invalid substraction'
    : '';
};
