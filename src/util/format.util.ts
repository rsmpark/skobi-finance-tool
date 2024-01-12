export const parseStringToNumber = (str: string): number => {
  const parsedNumber = parseFloat(str.replace(/,/g, ""));

  if (!isNaN(parsedNumber)) {
    return parsedNumber;
  }

  return NaN;
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

export const formatToCurrency = (value: number | string): string => {
  const numberValue = typeof value === "string" ? parseStringToNumber(value) : value;
  const formattedValue = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(numberValue);
  return formattedValue;
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
