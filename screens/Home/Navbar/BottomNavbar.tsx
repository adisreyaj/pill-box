/*
 * File: Navbar.tsx
 * Project: pill-box
 * File Created: Tuesday, 9th June 2020 7:59:03 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Monday, 15th June 2020 9:13:10 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { COLORS } from '../../../config/colors';
import { DeviceDimensions } from '../../../config/dimension';
import { SCREENS } from '../../../config/screens';

const BottomNavbar = ({ navigation }: { navigation: any }) => {
  const navigateTo = (screen: SCREENS) => navigation.navigate(screen);
  return (
    <View style={styles.navbar}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigateTo(SCREENS.home)}
        >
          <Feather name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigateTo(SCREENS.inventory)}
        >
          <Feather name="box" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.addButton}>
          <TouchableOpacity onPress={() => navigateTo(SCREENS.addInventory)}>
            <Feather name="plus" size={32} color="#fff" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigateTo(SCREENS.home)}
        >
          <Feather name="pie-chart" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigateTo(SCREENS.settings)}
        >
          <Feather name="settings" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 75,
    elevation: 20,
    alignItems: 'center',
    position: 'relative',
  },
  navButton: {
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
  },
  addButton: {
    backgroundColor: COLORS.accent,
    width: 80,
    height: 80,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 6,
    bottom: 20,
    borderWidth: 12,
    borderColor: '#fff',
  },
});

export default BottomNavbar;
