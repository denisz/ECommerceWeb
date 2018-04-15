import React from 'react';
import Layout from 'components/Layout';
import Menu from '../Menu';
import Dashboard from './Dashboard';

export default {
  path: '(.*)',
  async action() {
    return {
      title: 'Панель',
      component: (
          <Layout fullscreen>
            <Menu><Dashboard/></Menu>
          </Layout>
      ),
    };
  },
};
