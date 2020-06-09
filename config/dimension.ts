/*
 * File: dimension.ts
 * Project: pill-box
 * File Created: Monday, 8th June 2020 9:06:57 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Monday, 8th June 2020 9:33:24 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const DeviceDimensions = {
  width,
  height,
};
