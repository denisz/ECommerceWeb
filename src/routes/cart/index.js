import React from 'react';
import Layout from 'components/Layout';
import Cart from './Cart';

export default {
  path: '/cart',
  async action() {
    return {
      title: '',
      component: <Layout><Cart/></Layout>,
    };
  }
};
