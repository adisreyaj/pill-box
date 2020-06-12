/*
 * File: Navbar.tsx
 * Project: pill-box
 * File Created: Tuesday, 9th June 2020 7:59:03 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 12th June 2020 8:30:39 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { COLORS } from '../../../config/colors';
import { DeviceDimensions } from '../../../config/dimension';
import { SCREENS } from '../../../config/screens';

const BottomNavbar = ({ navigation }: { navigation: any }) => {
  const navigateTo = (screen: SCREENS) => navigation.navigate(screen);
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
        <TouchableOpacity onPress={() => navigateTo(SCREENS.home)}>
          <Feather name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo(SCREENS.inventory)}>
          <Feather name="box" size={24} color="black" />
        </TouchableOpacity>
        <View></View>
        <TouchableOpacity onPress={() => navigateTo(SCREENS.home)}>
          <Feather name="pie-chart" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo(SCREENS.home)}>
          <Feather name="settings" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          backgroundColor: COLORS.accent,
          width: 80,
          height: 80,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          zIndex: 6,
          bottom: 20,
          borderWidth: 12,
          borderColor: '#fff',
          right: DeviceDimensions.width / 2 - 35,
        }}
      >
        <TouchableOpacity onPress={() => navigateTo(SCREENS.addInventory)}>
          <Feather name="plus" size={32} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomNavbar;
