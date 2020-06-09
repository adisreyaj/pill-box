/*
 * File: Home.tsx
 * Project: pill-box
 * File Created: Monday, 8th June 2020 8:48:05 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Tuesday, 9th June 2020 9:27:32 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';

import { DeviceDimensions } from '../../config/dimension';
import HomeHeader from './Header/Header';
import BottomNavbar from './Navbar/BottomNavbar';
import { COLORS } from '../../config/colors';
import Upcoming from './Upcoming/Upcoming';

const Home = () => {
  return (
    <View style={{ height: '100%' }}>
      <HomeHeader />
      <View style={styles.body}>
        <Upcoming />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  body: {
    position: 'absolute',
    top: 300,
    paddingTop: 100,
    zIndex: 3,
    left: '-50%',
    overflow: 'hidden',
    width: DeviceDimensions.width * 2,
    paddingHorizontal: DeviceDimensions.width / 2 + 24,
    borderTopLeftRadius: 500,
    borderTopRightRadius: 500,
    backgroundColor: COLORS.background,
    height: DeviceDimensions.height - 250,
  },
});
export default Home;
