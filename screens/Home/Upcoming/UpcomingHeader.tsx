/*
 * File: UpcomingHeader.tsx
 * Project: pill-box
 * File Created: Tuesday, 9th June 2020 9:10:37 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Tuesday, 9th June 2020 9:13:08 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { View, Text } from 'react-native';
import Typography, { TypographyTypes } from '../../../components/Typography';
import { SimpleLineIcons } from '@expo/vector-icons';
const UpcomingHeader = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <View>
        <Typography type={TypographyTypes.heading}>Upcoming</Typography>
        <Typography type={TypographyTypes.body}>
          Be prepared to take these medicines on time!
        </Typography>
      </View>
      <View>
        <SimpleLineIcons name="grid" size={24} color="black" />
      </View>
    </View>
  );
};

export default UpcomingHeader;
