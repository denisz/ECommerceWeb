import React from 'react';
import Layout from 'components/Layout';
import Orders from './Orders';

export default {
  path: '/orders',
  async action() {
    return {
      title: 'Заказы',
      component: <Layout fullscreen menu><Orders /></Layout>,
    };
  },
};
