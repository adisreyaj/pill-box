/*
 * File: AddInventory.tsx
 * Project: pill-box
 * File Created: Friday, 12th June 2020 6:28:04 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 13th June 2020 9:25:44 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React, { useState, useReducer } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Typography, { TypographyTypes } from '../../components/Typography';
import FormField, { InputTypes } from '../../components/Inputs/FormField';
import { PrimaryButton, LinkButton } from '../../components/Buttons';
import { StackNavigationProp } from '@react-navigation/stack';
import RadioButton from '../../components/Inputs/RadioButton';
import { COLORS } from '../../config/colors';
import { useDispatch } from 'react-redux';
import { addMedicine } from '../../store/actions/medicine.actions';
import { SCREENS } from '../../config/screens';

const addInventoryForm = [
  {
    type: InputTypes.text,
    name: 'name',
    label: 'Name',
    error: undefined,
    hint: undefined,
    placeholder: 'Eg: Dolo 650',
    valid: false,
  },
  {
    type: InputTypes.text,
    name: 'brand',
    label: 'Brand',
    error: undefined,
    hint: undefined,
    placeholder: 'Eg: Cipla',
  },
  {
    type: InputTypes.textarea,
    name: 'description',
    label: 'Description',
    error: undefined,
    hint: undefined,
    placeholder: 'Eg: Pain Relief',
  },
  {
    type: InputTypes.numeric,
    name: 'quantity',
    label: 'Quantity',
    error: undefined,
    hint: undefined,
    width: '30%',
  },
  {
    type: InputTypes.numeric,
    label: 'Dosage',
    name: 'dosage',
    error: undefined,
    hint: undefined,
    width: '30%',
  },
];

const formReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'UPDATE':
      const updatedState = { ...state, [action.formControlName]: action.value };
      return updatedState;
      break;
    default:
      return state;
  }
};

const AddInventory = ({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}) => {
  const [timings, setTimings] = useState([
    { name: 'Morning', selected: false },
    { name: 'Noon', selected: false },
    { name: 'Night', selected: false },
  ]);
  const [form, dispatchFormState] = useReducer(formReducer, {});
  const dispatch = useDispatch();

  const updateTimings = (name: string) => {
    setTimings((prev: { name: string; selected: boolean }[]) => {
      return prev.map((item) => {
        if (item.name === name)
          Object.assign(item, { selected: !item.selected });
        return item;
      });
    });
    dispatchFormState({
      type: 'UPDATE',
      formControlName: 'timing',
      value: timings.map((item) => item.selected),
    });
  };

  const navigateToInventoryScreen = () => {
    navigation.goBack();
  };

  const formInputChangesHandler = (value: string, formControlName: string) => {
    switch (formControlName) {
      default:
        dispatchFormState({
          type: 'UPDATE',
          value,
          formControlName,
        });
        break;
    }
  };

  const submitForm = () =>
    dispatch(addMedicine(form)) && navigation.navigate(SCREENS.inventory);

  return (
    <SafeAreaView style={{ padding: 24, marginTop: 32 }}>
      <StatusBar barStyle="dark-content" />
      <Typography type={TypographyTypes.heading}>Add Medicine</Typography>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {addInventoryForm.map((item, i) => (
          <FormField
            {...item}
            key={i}
            valueChanges={(value: string) =>
              formInputChangesHandler(value, item.name)
            }
          />
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
          {timings.map(({ name, selected }, i) => (
            <TouchableOpacity
              key={i}
              activeOpacity={0.8}
              onPress={() => updateTimings(name)}
              style={{ alignItems: 'center', padding: 8 }}
            >
              <RadioButton selected={selected} />
              <Typography size={14} extraStyles={{ marginTop: 8 }}>
                {name}
              </Typography>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 64 }}>
        <PrimaryButton onClick={submitForm}>Save</PrimaryButton>
        <LinkButton onClick={navigateToInventoryScreen}>Cancel</LinkButton>
      </View>
    </SafeAreaView>
  );
};

export default AddInventory;
