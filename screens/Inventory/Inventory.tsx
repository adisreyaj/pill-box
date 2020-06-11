/*
 * File: Inventory.tsx
 * Project: pill-box
 * File Created: Tuesday, 9th June 2020 9:19:45 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Thursday, 11th June 2020 10:32:00 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */
import React from 'react';
import { View, Text, FlatList, TextInput, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';

import InventoryItem from './InventoryItem';
import Typography, { TypographyTypes } from '../../components/Typography';
import { inventoryMockResponse } from '../../assets/data/mock';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../../config/colors';

const Inventory = () => {
  return (
    <View>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="rgba(0,0,0,0)"
      />
      <LinearGradient
        colors={[COLORS.primaryContrast, COLORS.primary]}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          width: '100%',
          height: 220,
        }}
      />
      <View style={{ marginTop: 64, paddingHorizontal: 24 }}>
        <View style={{ marginBottom: 24 }}>
          <View
            style={{
              marginTop: 12,
              backgroundColor: '#fff',
              paddingHorizontal: 16,
              borderRadius: 4,
              paddingLeft: 50,
            }}
          >
            <View
              style={{
                position: 'absolute',
                left: 16,
                bottom: 0,
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Feather name="search" size={24} color="black" />
            </View>
            <View
              style={{
                position: 'absolute',
                right: 16,
                bottom: 0,
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Feather name="filter" size={24} color="black" />
            </View>
            <TextInput
              placeholder="Search Medicine"
              style={{ paddingVertical: 16, fontSize: 16 }}
            ></TextInput>
          </View>
        </View>
        <FlatList
          data={inventoryMockResponse.results}
          numColumns={2}
          renderItem={({ item, index }) => (
            <InventoryItem key={index} index={index} {...item} />
          )}
        />
      </View>
    </View>
  );
};

export default Inventory;
