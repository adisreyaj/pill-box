/*
 * File: Header.tsx
 * Project: pill-box
 * File Created: Monday, 8th June 2020 9:26:33 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Monday, 8th June 2020 9:31:03 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../../../config/colors';
import { DeviceDimensions } from '../../../config/dimension';
import HeaderButtons from './HeaderButtons';

const HomeHeader = () => {
  return (
    <View>
      <LinearGradient
        colors={[COLORS.primaryContrast, COLORS.primary]}
        start={[0.5, 0.0]}
        end={[1, 1]}
        style={styles.gradient}
      />
      <LinearGradient
        colors={['#000', 'transparent']}
        start={[0.5, 1]}
        end={[0.5, 0]}
        style={styles.gradientShadow}
      />
      <HeaderButtons />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  gradient: {
    position: 'absolute',
    left: 0,
    zIndex: 0,
    right: 0,
    top: 0,
    width: '100%',
    height: 500,
  },
  gradientShadow: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 300,
    zIndex: 1,
    width: '100%',
    height: 500,
  },
});

export default HomeHeader;
