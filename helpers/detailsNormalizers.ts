export const normalizeCamelCase = (value: string): string => {
  if (!value) return '';

  const withSpaces = value.replace(/([a-z])([A-Z])/g, '$1 $2');

  return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1).toLowerCase();
};

export const normalizeMeters = (val: string) => {
  if (!val) return '';

  return `${parseFloat(val)} m`;
};

export const normalizeLiters = (val: string) => {
  if (!val) return '';

  return `${parseFloat(val)} l`;
};
