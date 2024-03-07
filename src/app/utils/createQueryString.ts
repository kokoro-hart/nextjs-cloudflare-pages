import { ReadonlyURLSearchParams } from "next/navigation";

export const createQueryString = (
  searchParamsToBeOverride: URLSearchParams | ReadonlyURLSearchParams | string,
  paramsObject: Record<string, string | number | boolean | null | undefined>,
) => {
  const params = new URLSearchParams(searchParamsToBeOverride.toString());
  Object.entries(paramsObject).forEach(([key, value]) => {
    if (value === undefined) {
      params.delete(key);
    } else if (value === null) {
      params.set(key, "null");
    } else {
      params.set(key, value.toString());
    }
  });

  return params.toString();
};
