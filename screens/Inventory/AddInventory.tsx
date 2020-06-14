/*
 * File: AddInventory.tsx
 * Project: pill-box
 * File Created: Friday, 12th June 2020 6:28:04 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 14th June 2020 4:00:20 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React, { useState, useReducer, useRef } from 'react';
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
import { VALIDATORS } from '../../core/validators/validator';
import { FormFieldItem } from '../../interfaces/form-field.interface';

const addInventoryForm: FormFieldItem[] = [
  {
    type: InputTypes.text,
    name: 'name',
    label: 'Name',
    error: undefined,
    hint: undefined,
    required: true,
    placeholder: 'Eg: Dolo 650',
    validators: [VALIDATORS.minLength(3), VALIDATORS.maxLength(10)],
  },
  {
    type: InputTypes.text,
    name: 'brand',
    label: 'Brand',
    error: undefined,
    hint: undefined,
    required: true,
    placeholder: 'Eg: Cipla',
    validators: [VALIDATORS.minLength(3), VALIDATORS.maxLength(32)],
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
  {
    type: InputTypes.numeric,
    name: 'quantity',
    label: 'Quantity',
    error: undefined,
    hint: undefined,
    width: '30%',
    required: false,
    validators: [VALIDATORS.integer, VALIDATORS.min(0), VALIDATORS.max(200)],
  },
  {
    type: InputTypes.text,
    label: 'Dosage',
    name: 'dosage',
    error: undefined,
    hint: undefined,
    width: '30%',
    required: false,
    validators: [],
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
  let formFields: any = {};

  const setInputRef = (e: any, name: string) => {
    Object.assign(formFields, { [name]: e });
  };

  const onSubmitFormField = (name: string) => {
    const fields = Object.keys(formFields);
    const currentFieldIndex = fields.findIndex((item) => item === name);
    const nextFormItem = fields[currentFieldIndex + 1];
    if (nextFormItem) formFields[nextFormItem].focus();
  };

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

  const formInputChangesHandler = (
    value: string | number,
    formControlName: string,
  ) => {
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

  const checkIfFormItemValid = (formItem: FormFieldItem) => {
    if (form) {
      const selectedFormItemValue = form[formItem.name];
      if (selectedFormItemValue)
        if (formItem.validators && formItem.validators.length > 0)
          return formItem.validators.every(
            (validator) => validator(selectedFormItemValue).valid,
          );
    }
  };

  const getFormItemError = (formItem: FormFieldItem) => {
    if (form) {
      const selectedFormItemValue = form[formItem.name];
      let errors = [];
      if (formItem.validators && formItem.validators.length > 0) {
        errors = formItem.validators.map(
          (validator: Function) => validator(selectedFormItemValue).error,
        );
      }
      return errors.length > 0 ? errors.filter(Boolean)[0] : '';
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
            index={i}
            blurOnSubmit={i === addInventoryForm.length - 1}
            setRef={setInputRef}
            valid={checkIfFormItemValid(item)}
            submit={onSubmitFormField}
            error={getFormItemError(item)}
            valueChanges={(value: string) =>
              formInputChangesHandler(
                item.type === InputTypes.numeric ? +value : value,
                item.name,
              )
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
