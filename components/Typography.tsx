/*
 * File: Typography.tsx
 * Project: pill-box
 * File Created: Tuesday, 9th June 2020 8:39:00 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Tuesday, 9th June 2020 9:01:08 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { COLORS } from '../config/colors';

export enum TypographyTypes {
  body = 'body',
  heading = 'heading',
}

const Typography = ({
  type = TypographyTypes.body,
  children,
  extraStyles,
}: {
  type?: TypographyTypes;
  children: string;
  extraStyles?: object;
}) => {
  return (
    <Text style={{ ...baseStyles[type], ...extraStyles }}>{children}</Text>
  );
};

const baseStyles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: '700',
  },
  body: {
    fontSize: 18,
    color: COLORS.textLight,
  },
});
export default Typography;
