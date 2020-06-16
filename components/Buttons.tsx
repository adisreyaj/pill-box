/*
 * File: Buttons.tsx
 * Project: pill-box
 * File Created: Monday, 8th June 2020 8:59:42 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Tuesday, 16th June 2020 10:01:43 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS } from '../config/colors';
import Typography, { TypographyTypes } from './Typography';

const PrimaryButton = ({
  onClick,
  children,
}: {
  onClick?: Function;
  children: any;
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        backgroundColor: COLORS.primary,
        paddingHorizontal: 40,
        paddingVertical: 16,
        borderRadius: 50,
      }}
      onPress={() => (onClick ? onClick() : null)}
    >
      <Typography
        type={TypographyTypes.subHeading}
        color="#fff"
        extraStyles={{ fontSize: 18 }}
      >
        {children}
      </Typography>
    </TouchableOpacity>
  );
};

const StrokedButton = ({
  color,
  onClick,
  children,
}: {
  color?: string;
  onClick?: Function;
  children: any;
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        borderColor: color ? color : COLORS.textLight,
        borderWidth: 2,
        paddingHorizontal: 38,
        paddingVertical: 12,
        borderRadius: 50,
        alignItems: 'center',
      }}
      onPress={() => (onClick ? onClick() : null)}
    >
      <Typography
        type={TypographyTypes.subHeading}
        color={color ? color : COLORS.textDark}
        extraStyles={{ fontSize: 18 }}
      >
        {children}
      </Typography>
    </TouchableOpacity>
  );
};

const LinkButton = ({
  color,
  onClick,
  children,
}: {
  color?: string;
  onClick?: Function;
  children: any;
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={{
        paddingHorizontal: 40,
        paddingVertical: 16,
        borderRadius: 50,
      }}
      onPress={() => (onClick ? onClick() : null)}
    >
      <Typography
        type={TypographyTypes.subHeading}
        color={color ? color : COLORS.textDark}
        extraStyles={{ fontSize: 18 }}
      >
        {children}
      </Typography>
    </TouchableOpacity>
  );
};

export { PrimaryButton, StrokedButton, LinkButton };
