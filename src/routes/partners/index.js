import React from 'react';
import Layout from 'components/Layout';
import Partners from './Partners';

export default {
  path: '/partners',
  async action() {
    return {
      title: '',
      component: <Layout><Partners/></Layout>,
    };
  }
};
