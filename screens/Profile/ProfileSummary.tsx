/*
 * File: ProfileSummary.tsx
 * Project: pill-box
 * File Created: Tuesday, 16th June 2020 8:33:33 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Tuesday, 16th June 2020 9:50:32 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Typography, { TypographyTypes } from '../../components/Typography';
import { COLORS } from '../../config/colors';

const ProfileSummary = () => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 16,
      }}
    >
      <View style={{ alignItems: 'center' }}>
        <Typography type={TypographyTypes.subHeading}>25</Typography>
        <Typography color={COLORS.textLight}>Tablets</Typography>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Typography type={TypographyTypes.subHeading}>2</Typography>
        <Typography color={COLORS.textLight}>Dispensers</Typography>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Typography type={TypographyTypes.subHeading}>10</Typography>
        <Typography color={COLORS.textLight}>Days</Typography>
      </View>
    </View>
  );
};

export default ProfileSummary;
