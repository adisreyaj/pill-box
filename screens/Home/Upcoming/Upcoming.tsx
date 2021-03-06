/*
 * File: Upcoming.tsx
 * Project: pill-box
 * File Created: Tuesday, 9th June 2020 8:31:33 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Wednesday, 10th June 2020 9:57:03 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { View } from 'react-native';
import UpcomingList from './UpcomingList/UpcomingList';
import UpcomingHeader from './UpcomingHeader';

const UpcomingSection = () => {
  return (
    <View>
      <View>
        <UpcomingHeader />
      </View>
      <View style={{ marginTop: 24 }}>
        <UpcomingList />
      </View>
      <View></View>
    </View>
  );
};

export default UpcomingSection;
