/*
 * File: Navbar.tsx
 * Project: pill-box
 * File Created: Tuesday, 9th June 2020 7:59:03 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Tuesday, 9th June 2020 9:17:25 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS } from '../../../config/colors';
import { DeviceDimensions } from '../../../config/dimension';

const BottomNavbar = () => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 48,
        width: '100%',
        height: 75,
        elevation: 20,
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Feather name="home" size={24} color="black" />
        <Feather name="box" size={24} color="black" />
        <View></View>
        <Feather name="pie-chart" size={24} color="black" />
        <Feather name="settings" size={24} color="black" />
      </View>

      <View
        style={{
          width: 90,
          height: 90,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: COLORS.background,
          position: 'absolute',
          zIndex: 5,
          bottom: 40,
          right: DeviceDimensions.width / 2 - 45,
        }}
      ></View>
      <View
        style={{
          backgroundColor: COLORS.accent,
          width: 70,
          height: 70,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          zIndex: 6,
          bottom: 50,
          right: DeviceDimensions.width / 2 - 35,
          elevation: 2,
        }}
      >
        <TouchableOpacity>
          <Feather name="plus" size={32} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomNavbar;
