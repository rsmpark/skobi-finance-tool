export const parseStringToNumber = (str: string): number | null => {
  const parsedNumber = parseFloat(str.replace(/,/g, ""));

  if (!isNaN(parsedNumber)) {
    return parsedNumber;
  }

  return null;
};

export const parseObjectValuesToNumber = (
  obj: Record<string, string>
): Record<string, number> => {
  const newObj: Record<string, number> = {};

  for (const key in obj) {
    const parsedNumber = parseStringToNumber(obj[key]);

    if (parsedNumber !== null) {
      newObj[key] = parsedNumber;
    }
  }

  return newObj;
};

export const floorToDigit = (num: number, digit: number): number => {
  // TODO: Add error handling
  if (digit % 10 === 0 || digit === 1) return Math.floor(num / digit) * digit;

  return num;
};
export const ceilToDigit = (num: number, digit: number): number => {
  // TODO: Add error handling
  if (digit % 10 === 0 || digit === 1) return Math.ceil(num / digit) * digit;

  return num;
};
