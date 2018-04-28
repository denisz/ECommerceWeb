import React from 'react';
import Layout from 'components/Layout';
import Search from './Search';
import Menu from '../Menu';

export default {
  path: '/search',
  async action() {
    return {
      title: 'Заказы',
      component: (
          <Layout fullscreen>
            <Menu>
              <Search/>
            </Menu>
          </Layout>
      ),
    };
  },
};
