import React from 'react';
import Layout from 'components/Layout';

export default {
  path: '/',
  async action() {
    return {
      title: 'Доставка',
      component: <Layout></Layout>,
    };
  }
};
