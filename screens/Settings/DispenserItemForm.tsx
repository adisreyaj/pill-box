/*
 * File: DispenserItemForm.tsx
 * Project: pill-box
 * File Created: Monday, 15th June 2020 9:32:41 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Monday, 15th June 2020 9:57:37 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import FormField, { InputTypes } from '../../components/Inputs/FormField';
import { FormFieldItem } from '../../interfaces/form-field.interface';
import { VALIDATORS } from '../../core/validators/validator';
import { PrimaryButton, LinkButton } from '../../components/Buttons';
import { StackNavigationProp } from '@react-navigation/stack';
import { SCREENS } from '../../config/screens';
import Typography, { TypographyTypes } from '../../components/Typography';

const dispenserForm: FormFieldItem[] = [
  {
    type: InputTypes.text,
    name: 'name',
    label: 'Name',
    error: undefined,
    hint: undefined,
    required: true,
    placeholder: 'Eg: Dispenser 1',
    validators: [VALIDATORS.minLength(3), VALIDATORS.maxLength(32)],
  },
  {
    type: InputTypes.text,
    name: 'morning',
    label: 'Morning Time',
    error: undefined,
    hint: undefined,
    required: true,
    width: '50%',
    placeholder: 'Eg: 09:00',
    validators: [VALIDATORS.minLength(4), VALIDATORS.maxLength(5)],
  },
  {
    type: InputTypes.text,
    name: 'noon',
    label: 'Afternoon Time',
    error: undefined,
    hint: undefined,
    required: false,
    width: '50%',
    placeholder: 'Eg: 13:00',
    validators: [VALIDATORS.minLength(4), VALIDATORS.maxLength(5)],
  },
  {
    type: InputTypes.text,
    name: 'night',
    label: 'Night Time',
    error: undefined,
    hint: undefined,
    required: false,
    width: '50%',
    placeholder: 'Eg: 20:00',
    validators: [VALIDATORS.minLength(4), VALIDATORS.maxLength(32)],
  },
  {
    type: InputTypes.textarea,
    name: 'description',
    label: 'Description',
    error: undefined,
    hint: undefined,
    required: false,
    placeholder: 'Eg: Pain Relief',
    validators: [VALIDATORS.minLength(3), VALIDATORS.maxLength(250)],
  },
];

const DispenserItemForm = ({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}) => {
  const navigateToSettings = () => navigation.navigate(SCREENS.settings);
  return (
    <View style={{ padding: 24, marginTop: 32 }}>
      <Typography type={TypographyTypes.heading}>Add Dispenser</Typography>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {dispenserForm.map((item, i) => (
          <FormField
            {...item}
            key={i}
            index={i}
            s
            blurOnSubmit={i === dispenserForm.length - 1}
          />
        ))}
      </View>
      <View style={{ flexDirection: 'row', marginTop: 64 }}>
        <PrimaryButton>Save</PrimaryButton>
        <LinkButton onClick={navigateToSettings}>Cancel</LinkButton>
      </View>
    </View>
  );
};

export default DispenserItemForm;
