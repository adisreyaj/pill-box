/*
 * File: InventoryItem.tsx
 * Project: pill-box
 * File Created: Wednesday, 10th June 2020 10:01:32 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Wednesday, 10th June 2020 11:03:04 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Typography, { TypographyTypes } from '../../components/Typography';
import { COLORS } from '../../config/colors';

const InventoryItem = ({ index }: { index: number }) => {
  console.log(index);

  return (
    <View
      style={{
        padding: 8,
        width: '50%',
        paddingRight: index % 2 === 0 ? 8 : 0,
        paddingLeft: index % 2 === 0 ? 0 : 8,
      }}
    >
      <View
        style={{
          backgroundColor: '#fff',
          borderRadius: 4,
        }}
      >
        <View
          style={{
            margin: 16,
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            paddingBottom: 10,
            borderBottomColor: '#f3f3f3',
            borderBottomWidth: 1,
          }}
        >
          <View
            style={{
              backgroundColor: COLORS.primary,
              marginRight: 8,
              width: 40,
              height: 40,
              borderRadius: 20,
              marginBottom: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <MaterialCommunityIcons name="pill" size={24} color="#fff" />
          </View>
          <Typography
            type={TypographyTypes.heading}
            extraStyles={{ fontSize: 20 }}
          >
            Paracetamol
          </Typography>
        </View>
        <View style={{ padding: 16, paddingTop: 0 }}>
          <View
            style={{
              marginBottom: 6,
              flexDirection: 'row',
              alignItems: 'baseline',
            }}
          >
            <Typography type={TypographyTypes.heading}>50</Typography>
            <Typography
              extraStyles={{
                color: COLORS.textLight,
                marginLeft: 6,
                paddingBottom: 2,
              }}
            >
              /100 left
            </Typography>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}
          >
            <Typography>650 mg</Typography>
          </View>
        </View>
      </View>
    </View>
  );
};

export default InventoryItem;
