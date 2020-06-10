/*
 * File: UpcomingListItem.tsx
 * Project: pill-box
 * File Created: Tuesday, 9th June 2020 8:35:13 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Wednesday, 10th June 2020 10:53:20 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Typography from '../../../../components/Typography';
import { COLORS } from '../../../../config/colors';
const UpcomingListItem = () => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        borderRadius: 4,
        padding: 16,
        elevation: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8,
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View
          style={{
            marginRight: 12,
            backgroundColor: COLORS.primary,
            width: 40,
            height: 40,
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <MaterialCommunityIcons name="pill" size={24} color="#fff" />
        </View>
        <View>
          <Typography extraStyles={styles.tabletName}>Paracetamol</Typography>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
            <Typography extraStyles={styles.tabletMeta}>650mg</Typography>
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
            <Typography extraStyles={styles.tabletMeta}>1 Tablet</Typography>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <MaterialCommunityIcons
          name="clock-outline"
          size={16}
          color={COLORS.textLight}
        />
        <Typography
          extraStyles={{ marginLeft: 4, color: COLORS.textDark, fontSize: 16 }}
        >
          09:30 AM
        </Typography>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabletName: {
    color: COLORS.textDark,
    fontWeight: '700',
  },
  tabletMeta: {
    fontSize: 14,
  },
});

export default UpcomingListItem;
