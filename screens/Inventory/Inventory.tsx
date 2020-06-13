/*
 * File: Inventory.tsx
 * Project: pill-box
 * File Created: Tuesday, 9th June 2020 9:19:45 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 13th June 2020 9:24:52 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */
import React from 'react';
import { View, FlatList, TextInput, StatusBar, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

import InventoryItem from './InventoryItem';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../../config/colors';
import { useSelector } from 'react-redux';

const Inventory = () => {
  const medicines = useSelector((state: any) => state.medicine);
  console.log(medicines);

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
      <ScrollView style={{ marginTop: 42 }}>
        <View style={{ paddingHorizontal: 24 }}>
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
            data={medicines}
            numColumns={2}
            renderItem={({ item, index }) => (
              <InventoryItem
                key={item.name.toLowerCase()}
                index={index}
                {...item}
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Inventory;
