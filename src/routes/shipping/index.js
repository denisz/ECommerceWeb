import React from 'react';
import Layout from 'components/Layout';
import Shipping from './Shipping';

export default {
  path: '/shipping',
  async action() {
    return {
      title: '',
      component: <Layout><Shipping/></Layout>,
    };
  }
};
