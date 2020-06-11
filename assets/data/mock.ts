/*
 * File: mock.ts
 * Project: pill-box
 * File Created: Wednesday, 10th June 2020 11:05:57 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Thursday, 11th June 2020 9:41:03 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

export const inventoryMockResponse = {
  results: [
    {
      name: 'Dolo 650',
      total: 15,
      available: 12,
      dosage: '650mg',
      type: 'tablet',
      timing: [true, false, false],
    },
    {
      name: 'Calpol 650',
      total: 10,
      available: 5,
      dosage: '650mg',
      type: 'tablet',
      timing: [true, false, true],
    },
    {
      name: 'Allegra 120',
      total: 25,
      available: 22,
      dosage: '120mg',
      type: 'tablet',
      timing: [false, true, false],
    },
    {
      name: 'Altraday Capsule',
      total: 6,
      available: 2,
      dosage: '200mg',
      type: 'capsule',
      timing: [true, true, true],
    },
    {
      name: 'Ascoril D Plus',
      total: 2,
      available: 2,
      dosage: '1tsp',
      type: 'syrup',
      timing: [true, true, false],
    },
    {
      name: 'Clexane',
      total: 20,
      available: 12,
      dosage: '40mg',
      type: 'injection',
      timing: [false, false, true],
    },
  ],
};
