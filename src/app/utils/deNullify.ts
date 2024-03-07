/* eslint-disable */
type PlainObj = { [key: PropertyKey]: any };

const isPlainObject = (value: unknown): value is PlainObj => {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return false;
  }

  const proto = Object.getPrototypeOf(value);
  return proto === null || proto === Object.prototype;
};

export type DeNullify<T> = T extends null
  ? undefined
  : T extends PlainObj
    ? { [K in keyof T]: DeNullify<T[K]> }
    : T extends Array<infer U>
      ? DeNullify<U>[]
      : T;

export function deNullify<T>(
  src: T,
  ignoreKeys: string[] = ["disabledAt"],
  ignore = false,
): DeNullify<T> {
  if (src === null && !ignore) {
    return void 0 as DeNullify<T>;
  }

  if (isPlainObject(src)) {
    const clone = Object.create(null);

    for (const [key, value] of Object.entries(src)) {
      clone[key] = deNullify(value, ignoreKeys, ignoreKeys?.includes(key));
    }

    return clone as DeNullify<T>;
  }

  if (Array.isArray(src)) {
    return (src as unknown[]).map((v) => deNullify(v, ignoreKeys)) as DeNullify<T>;
  }

  return src as DeNullify<T>;
}
