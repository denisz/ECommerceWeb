import React from 'react';
import Layout from 'components/Layout';
import CartDetail from './CartDetail';
import CartActions from 'flux/CartActions';
import 'flux/Cart';

export default {
  path: '/cart',
  async action() {
    await CartActions.detail();

    return {
      title: 'Cart',
      component: <Layout><CartDetail /></Layout>,
    };
  }
};
