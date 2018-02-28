import React from 'react';
import Layout from 'components/Layout';
import Checkout from './Checkout';
import 'flux/Cart';
import CartActions from 'flux/CartActions';

export default {
  path: '/checkout',
  async action() {
    await CartActions.fetch();
    return {
      title: '',
      component: <Layout><Checkout/></Layout>,
    };
  }
};
