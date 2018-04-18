import React from 'react';
import 'flux/Cart';
import {toast} from 'react-toastify';
import CartActions from 'flux/CartActions';
import Review from './Review';
import Address from './Address';
import Delivery from './Delivery';
import Positions from './Positions';
import {css} from 'glamor';

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
    },
    nextBtn: 'Save',
    prevBtn: 'Back',
  },
  {
    key: 'review',
    title: 'Review',
    async form() {
      return props => <Review {...props} />;
    },
    async next() {
      await CartActions.checkout();

      toast.info(`Спасибо, Ваш заказ принят`, {
        hideProgressBar: true,
        position: toast.POSITION.TOP_CENTER,
        autoClose: 200000,
        className: css({
          top: 40,
          minHeight: 40,
        }),
      });
    },
    nextBtn: 'Save',
    prevBtn: 'Back',
  },
];
