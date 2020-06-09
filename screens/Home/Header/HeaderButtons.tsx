/*
 * File: HeaderButtons.tsx
 * Project: pill-box
 * File Created: Monday, 8th June 2020 9:28:44 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Tuesday, 9th June 2020 7:58:33 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
const HeaderButtons = () => {
  return (
    <View
      style={{
        marginTop: 72,
        paddingHorizontal: 32,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Feather name="user" size={24} color="#fff" />
      <Feather name="bell" size={24} color="#fff" />
    </View>
  );
};

export default HeaderButtons;
