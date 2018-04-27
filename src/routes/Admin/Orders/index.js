import React from 'react';
import Layout from 'components/Layout';
import OrdersPager from './OrdersPager';
import Menu from '../Menu';

export default {
  path: '/orders',
  async action() {
    return {
      title: 'Заказы',
      component: (
          <Layout fullscreen>
            <Menu>
              <OrdersPager/>
            </Menu>
          </Layout>
      ),
    };
  },
};
