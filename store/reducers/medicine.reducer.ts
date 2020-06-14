/*
 * File: medicines.ts
 * Project: pill-box
 * File Created: Saturday, 13th June 2020 8:49:01 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 14th June 2020 11:39:26 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { inventoryMockResponse } from '../../assets/data/mock';

export enum MedicineReducerActionTypes {
  add = 'ADD',
}

interface MedicineReducerAction {
  type: MedicineReducerActionTypes;
  payload: object;
}

export const medicineReducer = (
  state = inventoryMockResponse.results,
  action: MedicineReducerAction,
) => {
  switch (action.type) {
    case MedicineReducerActionTypes.add:
      const updatedState = [...state, action.payload];
      return updatedState;
      break;

    default:
      return state;
  }
};
