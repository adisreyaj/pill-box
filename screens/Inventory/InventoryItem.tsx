/*
 * File: InventoryItem.tsx
 * Project: pill-box
 * File Created: Wednesday, 10th June 2020 10:01:32 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Thursday, 11th June 2020 10:09:32 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import Typography, { TypographyTypes } from '../../components/Typography';
import { COLORS } from '../../config/colors';
import MedicineTimes from '../../components/MedicineTimes';

export interface InventoryItemProps {
  index: number;
  name: string;
  total: number;
  available: number;
  dosage: string;
  type: string;
  timing: boolean[];
}

const InventoryItem = ({
  index,
  name,
  dosage,
  type,
  timing,
}: InventoryItemProps) => {
  let icon = <MaterialCommunityIcons name="pill" size={24} color="#fff" />;
  if (type === 'syrup')
    icon = <MaterialCommunityIcons name="eyedropper" size={22} color="#fff" />;
  else if (type === 'injection')
    icon = <FontAwesome5 name="syringe" size={20} color="#fff" />;

  return (
    <View
      style={{
        ...styles.cardContainer,
        paddingRight: index % 2 === 0 ? 8 : 0,
        paddingLeft: index % 2 === 0 ? 0 : 8,
      }}
    >
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.icon}>{icon}</View>
          <Typography
            type={TypographyTypes.heading}
            extraStyles={{ fontSize: 20 }}
          >
            {name}
          </Typography>
          <Typography>{dosage}</Typography>
        </View>
        <View style={{ padding: 16, paddingTop: 0 }}>
          <MedicineTimes timing={timing} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 8,
    width: '50%',
  },
  cardHeader: {
    margin: 16,
    marginBottom: 8,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    paddingBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  icon: {
    backgroundColor: COLORS.primary,
    marginRight: 8,
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InventoryItem;
