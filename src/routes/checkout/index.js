import React from 'react';
import Layout from 'components/Layout';
import Checkout from './Checkout';
import Cart from 'flux/Cart';
import CartActions from 'flux/CartActions';

export default {
  path: '/checkout',
  async action() {
    await CartActions.detail();

    if (Cart.isEmpty()) {
      return {
        redirect: "/cart"
      }
    }

    return {
      title: 'Checkout',
      component: <Layout><Checkout/></Layout>,
    };
  }
};
