/*
 * File: mock.ts
 * Project: pill-box
 * File Created: Wednesday, 10th June 2020 11:05:57 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Monday, 15th June 2020 10:04:32 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { COLORS } from '../../config/colors';

export const inventoryMockResponse = {
  results: [
    {
      name: 'Dolo 650',
      quantity: 15,
      dosage: '650mg',
      type: 'tablet',
      timing: [true, false, false],
    },
    {
      name: 'Calpol 650',
      quantity: 10,
      dosage: '650mg',
      type: 'tablet',
      timing: [true, false, true],
    },
    {
      name: 'Allegra 120',
      quantity: 25,
      dosage: '120mg',
      type: 'tablet',
      timing: [false, true, false],
    },
    {
      name: 'Altraday Capsule',
      quantity: 6,
      dosage: '200mg',
      type: 'capsule',
      timing: [true, true, true],
    },
    {
      name: 'Ascoril D Plus',
      quantity: 2,
      dosage: '1tsp',
      type: 'syrup',
      timing: [true, true, false],
    },
    {
      name: 'Clexane',
      quantity: 20,
      dosage: '40mg',
      type: 'injection',
      timing: [false, false, true],
    },
  ],
};

export const dispenserMockResponse = [
  {
    name: 'Dispnser 1',
    morning: '09:00',
    afternoon: '13:30',
    night: '20:00',
    color: COLORS.primary,
    description: 'Pain Reflief Tablets',
  },
  {
    name: 'Dispnser 2',
    morning: '09:00',
    afternoon: '13:30',
    night: null,
    color: COLORS.accent,
    description: 'Pain Reflief Tablets',
  },
];
