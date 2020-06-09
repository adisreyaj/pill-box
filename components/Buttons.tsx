/*
 * File: Buttons.tsx
 * Project: pill-box
 * File Created: Monday, 8th June 2020 8:59:42 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Monday, 8th June 2020 9:05:20 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PrimaryButton = ({ onClick }: { onClick: Function }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#fff',
        paddingHorizontal: 40,
        paddingVertical: 16,
        borderRadius: 50,
      }}
      onPress={() => onClick()}
    >
      <Text style={{ fontSize: 16 }}>LOGIN</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
