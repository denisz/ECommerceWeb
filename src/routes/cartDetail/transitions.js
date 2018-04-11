import React from 'react';
import 'flux/Cart';
import 'flux/Order';
import CartActions from 'flux/CartActions';
import Address from './Address';
import Delivery from './Delivery';
import Positions from './Positions';

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
      await CartActions.address(attrs);
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
      await CartActions.delivery(attrs);
      await CartActions.checkout();
    },
    nextBtn: 'Save',
    prevBtn: 'Back',
  },
];
