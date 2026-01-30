type QueryParamValue = string | number | boolean;
type QueryParams = Record<string, QueryParamValue | QueryParamValue[] | undefined>;

export const cleanParams = (params: QueryParams): Record<string, QueryParamValue> => {
  const cleaned: Record<string, QueryParamValue> = {};

  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === '' || value === false) return;

    if (Array.isArray(value)) {
      if (value.length > 0) {
        cleaned[key] = value.join(',');
      }
    } else {
      cleaned[key] = value;
    }
  });

  return cleaned;
};
