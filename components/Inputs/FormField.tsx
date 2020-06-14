/*
 * File: FormField.tsx
 * Project: pill-box
 * File Created: Friday, 12th June 2020 6:33:56 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 14th June 2020 11:54:37 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Typography, { TypographyTypes } from '../Typography';
import { COLORS } from '../../config/colors';

export enum InputTypes {
  text = 'TEXT',
  textarea = 'TEXT_AREA',
  numeric = 'NUMERIC',
}

export interface FormFieldInterface {
  valueChanges?: Function;
  setRef?: Function;
  submit?: Function;
  index?: number;
  name?: string;
  type?: InputTypes;
  label?: string;
  placeholder?: string;
  width?: number | string;
  hint?: string;
  error?: string;
  blurOnSubmit?: boolean;
  valid?: boolean;
}

const FormField = ({
  valueChanges = () => {},
  setRef = () => {},
  submit = () => {},
  index,
  type = InputTypes.text,
  label,
  name,
  placeholder,
  hint,
  valid,
  width = '100%',
  error,
  blurOnSubmit = false,
}: FormFieldInterface) => {
  return (
    <View style={{ paddingVertical: 12, width, marginRight: 24 }}>
      {label && (
        <View>
          <Typography color={COLORS.textDark} type={TypographyTypes.subHeading}>
            {label}
          </Typography>
        </View>
      )}
      <View style={styles.textContainer}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#999"
          keyboardType={type === InputTypes.numeric ? 'numeric' : 'default'}
          returnKeyType="next"
          onSubmitEditing={() => submit(name)}
          blurOnSubmit={blurOnSubmit}
          ref={(e) => setRef(e, name)}
          multiline={type === InputTypes.textarea}
          onChangeText={(value) => valueChanges(value)}
          numberOfLines={type === InputTypes.textarea ? 5 : 1}
          style={{ width: '100%', minHeight: 50, fontSize: 18 }}
        />
        <View style={{ position: 'absolute', right: 16, top: 16 }}>
          {!valid && (
            <Ionicons name="ios-warning" size={20} color={COLORS.statusRed} />
          )}
        </View>
      </View>
      <View style={{ marginTop: 6 }}>
        {error ? (
          <Typography extraStyles={{ color: COLORS.statusRed, fontSize: 14 }}>
            {error}
          </Typography>
        ) : null}
        {hint && (
          <Typography extraStyles={{ color: COLORS.statusRed, fontSize: 14 }}>
            Please enter a valid name
          </Typography>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    marginTop: 12,
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 4,
    minHeight: 50,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
  },
});

export default FormField;
