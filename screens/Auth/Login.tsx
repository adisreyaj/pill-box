/*
 * File: Login.tsx
 * Project: pill-box
 * File Created: Monday, 8th June 2020 8:48:25 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 12th June 2020 8:11:32 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../config/colors';
import { PrimaryButton } from '../../components/Buttons';
import { SCREENS } from '../../config/screens';

const Login = () => {
  const navigation = useNavigation();
  const navigateToHome = () => navigation.navigate(SCREENS.main);
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <LinearGradient
        colors={[COLORS.primaryContrast, COLORS.primary]}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          width: '100%',
          height: '100%',
        }}
      />

      <PrimaryButton onClick={() => navigateToHome()}>Go To App</PrimaryButton>
    </View>
  );
};

export default Login;
