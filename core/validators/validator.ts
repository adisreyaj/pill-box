/*
 * File: medicine.validator.ts
 * Project: pill-box
 * File Created: Saturday, 13th June 2020 9:32:43 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 13th June 2020 11:19:42 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */
const min = (min = 0) => (value: number) => ({
  valid: value > min,
  error: value > min ? null : `Number should be greater than ${min}`,
});
const max = (max = 999) => (value: number) => ({
  valid: value < max,
  error: value < max ? null : `Number should be less than ${max}`,
});
const integer = (value: number) => ({ valid: Number.isInteger(value) });
const positive = (value: number) => ({ valid: value >= 0 });
const minLength = (min = 0) => (value: string) => ({
  valid: value && value.length > min,
  error: value && value.length > min ? null : `Min ${min} required`,
});
const maxLength = (max = 999) => (value: string) => ({
  valid: value && value.length < max,
  error: value && value.length < max ? null : `Max allowed ${max} chars`,
});

export const VALIDATORS = {
  integer,
  min,
  max,
  positive,
  minLength,
  maxLength,
};
