/*
 * File: HeaderButtons.tsx
 * Project: pill-box
 * File Created: Monday, 8th June 2020 9:28:44 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Tuesday, 16th June 2020 7:58:13 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../../config/screens';
const HeaderButtons = () => {
  const navigation = useNavigation();

  const navigateTo = (screen: SCREENS) => navigation.navigate(screen);
  return (
    <View
      style={{
        marginTop: 72,
        paddingHorizontal: 24,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <TouchableOpacity
        style={{ padding: 12 }}
        onPress={() => navigateTo(SCREENS.profile)}
      >
        <Feather name="user" size={24} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{ padding: 12 }}
        onPress={() => navigateTo(SCREENS.profile)}
      >
        <Feather name="bell" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderButtons;
