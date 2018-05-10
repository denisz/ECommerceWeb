import React from 'react';
import Layout from 'components/Layout';
import Batches from './Batches';
import Menu from '../Menu';

export default {
  path: '/batches',
  async action() {
    return {
      title: 'Партии',
      component: (
          <Layout fullscreen>
            <Menu><Batches/></Menu>
          </Layout>
      ),
    };
  },
};
