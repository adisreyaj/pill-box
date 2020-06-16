/*
 * File: DispenserItem.tsx
 * Project: pill-box
 * File Created: Monday, 15th June 2020 9:20:05 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Tuesday, 16th June 2020 7:13:41 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { COLORS } from '../../config/colors';
import Typography, { TypographyTypes } from '../../components/Typography';
import { SCREENS } from '../../config/screens';

export interface DispenserItemProps {
  id?: string;
  name: string;
  morning?: string;
  color?: string;
  afternoon?: string;
  night?: string;
  description?: string;
}

const DispenserItem = ({
  name,
  morning,
  afternoon,
  night,
  color,
}: DispenserItemProps) => {
  const navigation = useNavigation();
  const openDispenserForm = () => navigation.navigate(SCREENS.dispenserForm);

  return (
    <View style={styles.dispenser}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={[styles.dispenserIcon, { backgroundColor: color }]}>
            <Entypo name="box" size={24} color="#fff" />
          </View>
          <View>
            <Typography
              type={TypographyTypes.subHeading}
              extraStyles={{ fontSize: 18 }}
            >
              {name}
            </Typography>
            <Typography extraStyles={{ fontSize: 16 }}>
              {morning && 'Morning'}{' '}
              {afternoon && (
                <View
                  style={{
                    width: 5,
                    height: 5,
                    marginHorizontal: 4,
                    backgroundColor: COLORS.primary,
                    borderRadius: 4,
                    marginBottom: 4,
                  }}
                ></View>
              )}{' '}
              {afternoon && 'Noon'}{' '}
              {night && (
                <View
                  style={{
                    width: 5,
                    height: 5,
                    marginHorizontal: 4,
                    backgroundColor: COLORS.primary,
                    borderRadius: 4,
                    marginBottom: 4,
                  }}
                ></View>
              )}{' '}
              {night && 'Night'}
            </Typography>
          </View>
        </View>
        <TouchableOpacity onPress={() => openDispenserForm()}>
          <Feather name="edit-2" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dispenser: {
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 16,
    paddingHorizontal: 20,
    marginVertical: 8,
  },
  dispenserIcon: {
    backgroundColor: COLORS.primary,
    padding: 12,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
});

export default DispenserItem;
