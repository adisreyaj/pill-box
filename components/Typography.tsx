/*
 * File: Typography.tsx
 * Project: pill-box
 * File Created: Tuesday, 9th June 2020 8:39:00 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Monday, 15th June 2020 10:07:11 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { COLORS } from '../config/colors';

export enum TypographyTypes {
  body = 'body',
  heading = 'heading',
  subHeading = 'subHeading',
}

const Typography = ({
  type = TypographyTypes.body,
  children,
  extraStyles,
  color,
  size,
}: {
  type?: TypographyTypes;
  children: any;
  color?: string;
  size?: number;
  extraStyles?: object;
}) => {
  return (
    <Text style={{ ...baseStyles[type], ...extraStyles, color }}>
      {children}
    </Text>
  );
};

const baseStyles = StyleSheet.create({
  heading: {
    fontSize: 28,
    fontWeight: '700',
    fontFamily: 'Inter-Bold',
  },
  body: {
    fontSize: 18,
    color: COLORS.textLight,
    fontFamily: 'Inter-Regular',
  },
  subHeading: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
  },
});
export default Typography;
