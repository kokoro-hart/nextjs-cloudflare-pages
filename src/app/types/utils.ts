/* eslint-disable */

/**
 * NonUndefined
 * @desc Exclude undefined from set `A`
 * @example
 *   // Expect: "string | null"
 *   SymmetricDifference<string | null | undefined>;
 */
export type NonUndefined<A> = A extends undefined ? never : A;

/**
 * DeepRequired
 * @desc Required that works for deeply nested structure
 * @example
 *   // Expect: {
 *   //   first: {
 *   //     second: {
 *   //       name: string;
 *   //     };
 *   //   };
 *   // }
 *   type NestedProps = {
 *     first?: {
 *       second?: {
 *         name?: string;
 *       };
 *     };
 *   };
 *   type RequiredNestedProps = DeepRequired<NestedProps>;
 */
export type DeepRequired<T> = T extends (...args: any[]) => any
  ? T
  : T extends any[]
    ? PrivateDeepRequiredArray<T[number]>
    : T extends object
      ? PrivateDeepRequiredObject<T>
      : T;
/** @private */
export interface PrivateDeepRequiredArray<T> extends Array<DeepRequired<NonUndefined<T>>> {}
/** @private */
export type PrivateDeepRequiredObject<T> = {
  [P in keyof T]-?: DeepRequired<NonUndefined<T[P]>>;
};

/**
 * DeepPartial
 * @desc Partial that works for deeply nested structure
 * @example
 *   // Expect: {
 *   //   first?: {
 *   //     second?: {
 *   //       name?: string;
 *   //     };
 *   //   };
 *   // }
 *   type NestedProps = {
 *     first: {
 *       second: {
 *         name: string;
 *       };
 *     };
 *   };
 *   type PartialNestedProps = DeepPartial<NestedProps>;
 */
export type DeepPartial<T> = { [P in keyof T]?: PrivateDeepPartial<T[P]> };

/** @private */
export type PrivateDeepPartial<T> = T extends Function
  ? T
  : T extends Array<infer U>
    ? PrivateDeepPartialArray<U>
    : T extends object
      ? DeepPartial<T>
      : T | undefined;
/** @private */
export interface PrivateDeepPartialArray<T> extends Array<PrivateDeepPartial<T>> {}

/**
 * SomeRequired
 * @desc Creates a type that partially requires specific properties of a deeply nested structure.
 * @example
 *   // Given the following type:
 *   type ExampleType = {
 *     first: {
 *       second: {
 *         name?: string;
 *         age?: number;
 *       };
 *     };
 *     otherProperty: string;
 *   };
 *
 *   // Usage:
 *   type ResultType = SomeRequired<ExampleType, 'first.second'>;
 *
 *   // ResultType will be:
 *   // {
 *   //   first: {
 *   //     second: {
 *   //       name: string;
 *   //       age: number;
 *   //     };
 *   //   };
 *   //   otherProperty: string;
 *   // }
 */
export type SomeRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
