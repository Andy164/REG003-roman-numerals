import { stringify, parse } from '..';

const testValues: Array<[number, string]> = [
  [1, 'I'],
  [2, 'II'],
  [3, 'III'],
  [4, 'IV'],
  [5, 'V'],
  [6, 'VI'],
  [7, 'VII'],
  [8, 'VIII'],
  [9, 'IX'],
  [10, 'X'],
  [1492, 'MCDXCII'],
  [1944, 'MCMXLIV'],
  [2020, 'MMXX'],
  [3999, 'MMMCMXCIX'],
];

describe('parse', () => {
  it('should throw when bad chars', () => {
    expect(() => parse('IG')).toThrow('Unknown roman numeral');
    expect(() => parse('')).toThrow('Unknown roman numeral');
    expect(() => parse('MCDXCII MMMCMXCIX')).toThrow('Unknown roman numeral');
  });

  it('should throw when repetitions of number starting with 5', () => {
    expect(() => parse('LL')).toThrow('Invalid repetition of number starting with 5: L (50),');
  });

  it('should throw when too many repetitions', () => {
    expect(() => parse('IIII')).toThrow('Too many repetitions of roman numeral(s): I (1),');
  });

  it('should throw when invalid substraction prefix (must be 1 or multiple of 10)', () => {
    expect(() => parse('VX')).toThrow('Invalid substraction prefix V');
  });

  it('should throw when wrong substraction', () => {
    expect(() => parse('LXIIIX')).toThrow('Invalid substraction');
  });

  it('should throw when invalid roman numeral', () => {
    expect(() => parse('MDIVIIIV')).toThrow('Invalid roman numeral');
    expect(() => parse('DIIIXX')).toThrow('Invalid roman numeral');
  });

  testValues.forEach(([expected, input]: [number, string]): void => {
    it(`should return ${expected} when input is ${input}`, () => {
      expect(parse(input)).toBe(expected);
    });
  });
});

describe('stringify', () => {
  it('should throw when input out of range', () => {
    expect(() => stringify(-1)).toThrow('Out of range');
    expect(() => stringify(4000)).toThrow('Out of range');
  });

  testValues.forEach(([input, expected]: [number, string]) => {
    it(`should return ${expected} when input is ${input}`, () => {
      expect(stringify(input)).toBe(expected);
    });
  });
});
