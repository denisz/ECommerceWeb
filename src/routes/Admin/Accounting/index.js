import React from 'react';
import Layout from 'components/Layout';
import Menu from '../Menu';
import Accounting from './Accounting';

export default {
  path: '/accounting',
  async action() {
    return {
      title: 'Склад',
      component: (
          <Layout fullscreen>
            <Menu><Accounting /></Menu>
          </Layout>
      ),
    };
  },
};
