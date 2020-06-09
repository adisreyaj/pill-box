/*
 * File: Main.tsx
 * Project: pill-box
 * File Created: Tuesday, 9th June 2020 9:20:10 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Tuesday, 9th June 2020 9:27:16 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SCREENS } from '../config/screens';
import Home from './Home/Home';
import BottomNavbar from './Home/Navbar/BottomNavbar';

const Tab = createBottomTabNavigator();
const Main = () => {
  return (
    <Tab.Navigator tabBar={BottomNavbar}>
      <Tab.Screen name={SCREENS.home} component={Home}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default Main;
