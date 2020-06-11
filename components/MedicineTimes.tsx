/*
 * File: MedicineTimes.tsx
 * Project: pill-box
 * File Created: Thursday, 11th June 2020 8:24:17 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Thursday, 11th June 2020 10:30:22 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from '../config/colors';
const MedicineTimes = ({
  timing = [false, false, false],
}: {
  timing: boolean[];
}) => {
  return (
    <View>
      <View style={styles.timeContainer}>
        {timing.map((item, i) => {
          return item ? (
            <Ionicons
              key={i}
              name="ios-checkmark-circle"
              size={24}
              color={COLORS.statusGreen}
            />
          ) : (
            <FontAwesome name="circle" key={i} size={24} color="#cccccc" />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timeContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ededed',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 50,
  },
});

export default MedicineTimes;
