/*
 * File: Settings.tsx
 * Project: pill-box
 * File Created: Monday, 15th June 2020 9:11:55 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Tuesday, 16th June 2020 7:13:22 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Typography, { TypographyTypes } from '../../components/Typography';
import DispenserItem from './DispenserItem';
import { SCREENS } from '../../config/screens';
import { dispenserMockResponse } from '../../assets/data/mock';
import { StackNavigationProp } from '@react-navigation/stack';

const Settings = ({ navigation }: { navigation: StackNavigationProp<any> }) => {
  const openDispenserForm = () => navigation.navigate(SCREENS.dispenserForm);

  return (
    <SafeAreaView style={{ padding: 24, marginTop: 32 }}>
      <Typography type={TypographyTypes.heading}>Settings</Typography>
      <View style={{ marginTop: 32 }}>
        <Typography type={TypographyTypes.subHeading}>Dispensers</Typography>
        <View style={{ marginTop: 12 }}>
          <FlatList
            data={dispenserMockResponse}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <DispenserItem {...item} />}
          />
        </View>
        <TouchableOpacity
          onPress={() => openDispenserForm()}
          style={{ alignItems: 'center', marginTop: 24 }}
        >
          <Ionicons name="ios-add-circle-outline" size={24} color="black" />
          <Typography>Add More</Typography>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
