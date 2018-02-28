import React from 'react';
import Layout from 'components/Layout';
import CartDetail from './CartDetail';
import Cart from 'flux/Cart';
import CartActions from 'flux/CartActions';

export default {
  path: '/cart',
  async action() {
    await CartActions.fetch();

    return {
      title: '',
      component: <Layout><CartDetail /></Layout>,
    };
  }
};
