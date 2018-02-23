import React from 'react';
import Layout from 'components/Layout';
import Checkout from './Checkout';

export default {
  path: '/checkout',
  async action() {
    return {
      title: '',
      component: <Layout><Checkout/></Layout>,
    };
  }
};
