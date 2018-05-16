import React from 'react';
import Layout from 'components/Layout';
import BatchesPager from './BatchesPager';
import Menu from '../Menu';

export default {
  path: '/batches',
  async action() {
    return {
      title: 'Партии',
      component: (
          <Layout fullscreen>
            <Menu><BatchesPager/></Menu>
          </Layout>
      ),
    };
  },
};
