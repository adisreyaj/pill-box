/*
 * File: Home.tsx
 * Project: pill-box
 * File Created: Monday, 8th June 2020 8:48:05 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Tuesday, 9th June 2020 8:06:44 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import { DeviceDimensions } from '../../config/dimension';
import HomeHeader from './Header/Header';
import BottomNavbar from './Navbar/BottomNavbar';
import { COLORS } from '../../config/colors';

const Home = () => {
  return (
    <View style={{ height: '100%' }}>
      <HomeHeader />
      <View style={styles.body}></View>
      <View
        style={{ position: 'absolute', width: '100%', bottom: 0, zIndex: 5 }}
      >
        <BottomNavbar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  body: {
    position: 'absolute',
    top: 300,
    zIndex: 2,
    left: '-50%',
    overflow: 'hidden',
    width: '200%',
    borderTopLeftRadius: 500,
    borderTopRightRadius: 500,
    backgroundColor: COLORS.background,
    height: DeviceDimensions.height - 250,
  },
});
export default Home;
