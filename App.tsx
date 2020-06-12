/*
 * File: App.tsx
 * Project: pill-box
 * File Created: Monday, 8th June 2020 8:34:34 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 12th June 2020 6:46:24 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

import { SCREENS } from './config/screens';
import Login from './screens/Auth/Login';
import Main from './screens/Main';
import AddInventory from './screens/Inventory/AddInventory';

const Stack = createStackNavigator();
const App = () => {
  let [fontsLoaded] = useFonts({
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
  });
  return !fontsLoaded ? (
    <AppLoading />
  ) : (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREENS.login} headerMode="none">
        <Stack.Screen name={SCREENS.main} component={Main} />
        <Stack.Screen name={SCREENS.login} component={Login} />
        <Stack.Screen name={SCREENS.addInventory} component={AddInventory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
