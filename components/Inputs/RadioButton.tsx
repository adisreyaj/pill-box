/*
 * File: RadioButton.tsx
 * Project: pill-box
 * File Created: Friday, 12th June 2020 8:34:54 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 12th June 2020 8:59:14 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */
import React from 'react';
import { View } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

import { COLORS } from '../../config/colors';

const RadioButton = ({ selected = false }: { selected?: boolean }) => {
  return selected ? (
    <Ionicons
      name="ios-checkmark-circle"
      size={32}
      color={COLORS.statusGreen}
    />
  ) : (
    <FontAwesome name="circle" size={32} color="#cccccc" />
  );
};

export default RadioButton;
