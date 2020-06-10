/*
 * File: Inventory.tsx
 * Project: pill-box
 * File Created: Tuesday, 9th June 2020 9:19:45 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Wednesday, 10th June 2020 11:02:21 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */
import React from 'react';
import { View, Text } from 'react-native';
import InventoryItem from './InventoryItem';
import { FlatList } from 'react-native-gesture-handler';
import Typography, { TypographyTypes } from '../../components/Typography';

const Inventory = () => {
  return (
    <View style={{ marginTop: 64, paddingHorizontal: 24 }}>
      <View style={{ marginBottom: 24 }}>
        <Typography type={TypographyTypes.heading}>
          Medicines Available
        </Typography>
      </View>
      <FlatList
        data={[1, 2]}
        numColumns={2}
        renderItem={({ item, index }) => (
          <InventoryItem key={item} index={index} />
        )}
      />
    </View>
  );
};

export default Inventory;
