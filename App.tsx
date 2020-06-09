/*
 * File: App.tsx
 * Project: pill-box
 * File Created: Monday, 8th June 2020 8:34:34 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Tuesday, 9th June 2020 9:21:24 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SCREENS } from './config/screens';
import Login from './screens/Auth/Login';
import Main from './screens/Main';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREENS.login} headerMode="none">
        <Stack.Screen name={SCREENS.main} component={Main} />
        <Stack.Screen name={SCREENS.login} component={Login} />
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
