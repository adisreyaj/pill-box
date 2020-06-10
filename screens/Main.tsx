/*
 * File: Main.tsx
 * Project: pill-box
 * File Created: Tuesday, 9th June 2020 9:20:10 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Wednesday, 10th June 2020 10:02:15 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SCREENS } from '../config/screens';
import Home from './Home/Home';
import BottomNavbar from './Home/Navbar/BottomNavbar';
import Inventory from './Inventory/Inventory';

const Tab = createBottomTabNavigator();
const Main = () => {
  return (
    <Tab.Navigator tabBar={BottomNavbar}>
      <Tab.Screen name={SCREENS.home} component={Home}></Tab.Screen>
      <Tab.Screen name={SCREENS.inventory} component={Inventory}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default Main;
