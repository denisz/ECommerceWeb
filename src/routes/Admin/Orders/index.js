import React from 'react';
import Layout from 'components/Layout';
import Orders from './Orders';
import Menu from '../Menu';

export default {
  path: '/orders',
  async action() {
    return {
      title: 'Заказы',
      component: (
          <Layout fullscreen>
            <Menu>
              <Orders/>
            </Menu>
          </Layout>
      ),
    };
  },
};
