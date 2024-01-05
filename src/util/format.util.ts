export const parseStringToNumber = (str: string): number | null => {
  const parsedNumber = parseFloat(str);

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

    if (parsedNumber) {
      newObj[key] = parsedNumber;
    }
  }

  return newObj;
};
