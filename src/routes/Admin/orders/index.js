import React from 'react';
import Layout from 'components/Layout';
import Menu from '../Menu';
import Orders from './Orders';

export default {
  path: '/orders',
  async action() {
    return {
      title: 'Заказы',
      component: (
          <Layout fullscreen>
            <Menu><Orders /></Menu>
          </Layout>
      ),
    };
  },
};
