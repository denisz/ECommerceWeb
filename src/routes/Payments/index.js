import React from 'react';
import Layout from 'components/Layout';
import Payments from './Payments';

export default {
  path: '/payments',
  async action() {
    return {
      title: '',
      component: <Layout><Payments/></Layout>,
    };
  }
};
