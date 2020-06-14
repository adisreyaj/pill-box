/*
 * File: form-field.interface.ts
 * Project: pill-box
 * File Created: Sunday, 14th June 2020 3:55:02 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 14th June 2020 3:58:31 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { InputTypes } from '../components/Inputs/FormField';

export interface FormFieldItem {
  type?: InputTypes;
  name: string;
  label?: string;
  error?: string;
  hint?: string;
  required?: boolean;
  placeholder?: string;
  validators?: Function[];
  width?: string | number;
}
