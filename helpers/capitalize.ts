export const capitalize = (value: string): string =>
  value ? value[0].toUpperCase() + value.slice(1) : '';
