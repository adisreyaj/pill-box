/*
 * File: AddInventory.tsx
 * Project: pill-box
 * File Created: Friday, 12th June 2020 6:28:04 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 12th June 2020 9:05:12 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Typography, { TypographyTypes } from '../../components/Typography';
import FormField, { InputTypes } from '../../components/Inputs/FormField';
import {
  PrimaryButton,
  StrokedButton,
  LinkButton,
} from '../../components/Buttons';
import { StackNavigationProp } from '@react-navigation/stack';
import RadioButton from '../../components/Inputs/RadioButton';
import { COLORS } from '../../config/colors';

const addInventoryForm = [
  {
    type: InputTypes.text,
    label: 'Name',
    error: undefined,
    hint: undefined,
    placeholder: 'Eg: Dolo 650',
    valid: false,
  },
  {
    type: InputTypes.text,
    label: 'Brand',
    error: undefined,
    hint: undefined,
    placeholder: 'Eg: Cipla',
  },
  {
    type: InputTypes.textarea,
    label: 'Description',
    error: undefined,
    hint: undefined,
    placeholder: 'Eg: Pain Relief',
  },
  {
    type: InputTypes.numeric,
    label: 'Quantity',
    error: undefined,
    hint: undefined,
    width: '30%',
  },
  {
    type: InputTypes.numeric,
    label: 'Dosage',
    error: undefined,
    hint: undefined,
    width: '30%',
  },
];

const AddInventory = ({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}) => {
  const [timings, setTimings] = useState([false, false, false]);

  const updateTimings = (index: number) => {
    setTimings((prev: boolean[]) => {
      return prev.map((item, i) => (i === index ? !item : item));
    });
  };
  const navigateToInventoryScreen = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={{ padding: 24, marginTop: 32 }}>
      <StatusBar barStyle="dark-content" />
      <Typography type={TypographyTypes.heading}>Add Medicine</Typography>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {addInventoryForm.map((item, i) => (
          <FormField {...item} key={i} />
        ))}
      </View>
      <View style={{ marginTop: 12 }}>
        <Typography color={COLORS.textDark} type={TypographyTypes.subHeading}>
          Timing
        </Typography>
        <View
          style={{
            marginTop: 24,
            flexDirection: 'row',
            justifyContent: 'space-between',
            maxWidth: 300,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => updateTimings(0)}
            style={{ alignItems: 'center', padding: 8 }}
          >
            <RadioButton selected={timings[0]} />
            <Typography size={14} extraStyles={{ marginTop: 8 }}>
              Morning
            </Typography>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{ alignItems: 'center', padding: 8 }}
            onPress={() => updateTimings(1)}
          >
            <RadioButton selected={timings[1]} />
            <Typography size={14} extraStyles={{ marginTop: 8 }}>
              Noon
            </Typography>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{ alignItems: 'center', padding: 8 }}
            onPress={() => updateTimings(2)}
          >
            <RadioButton selected={timings[2]} />
            <Typography size={14} extraStyles={{ marginTop: 8 }}>
              Night
            </Typography>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 64 }}>
        <PrimaryButton>Save</PrimaryButton>
        <LinkButton onClick={navigateToInventoryScreen}>Cancel</LinkButton>
      </View>
    </SafeAreaView>
  );
};

export default AddInventory;
