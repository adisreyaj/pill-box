/*
 * File: medicine.actions.ts
 * Project: pill-box
 * File Created: Saturday, 13th June 2020 8:49:12 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 13th June 2020 8:56:18 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

export const medicineActions = {
  add: 'ADD',
};

export const addMedicine = (payload: any) => {
  return {
    type: medicineActions.add,
    payload,
  };
};
