/*
 * File: UpcomingList.tsx
 * Project: pill-box
 * File Created: Tuesday, 9th June 2020 8:35:04 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Tuesday, 9th June 2020 9:08:21 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { View, Text } from 'react-native';
import Typography, { TypographyTypes } from '../../../../components/Typography';
import UpcomingListItem from './UpcomingListItem';

const UpcomingList = () => {
  return (
    <View>
      <UpcomingListItem />
      <UpcomingListItem />
    </View>
  );
};

export default UpcomingList;
