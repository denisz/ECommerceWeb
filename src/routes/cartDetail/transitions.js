import React from 'react';
import Positions from './Positions';
import Address from './Address';
import Delivery from './Delivery';

export default [
  {
    key: 'positions',
    title: 'Positions',
    async form() {
      return props => <Positions {...props} />;
    },
    async next(attrs) {
      console.log(attrs);
    },
    nextBtn: 'Save',
  },
  {
    key: 'address',
    title: 'Address',
    async form() {
      return props => <Address {...props} />;
    },
    async next(attrs) {
      console.log(attrs);
    },
    nextBtn: 'Save',
    prevBtn: 'Back',
  },
  {
    key: 'delivery',
    title: 'Delivery',
    async form() {
      return props => <Delivery {...props} />;
    },
    async next(attrs) {
      console.log(attrs);
    },
    nextBtn: 'Save',
    prevBtn: 'Back',
  },
];
