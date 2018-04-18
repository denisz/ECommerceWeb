import React from 'react';
import Layout from 'components/Layout';
import Menu from '../Menu';
import Commands from './Commands';

export default {
  path: '/commands',
  async action() {
    return {
      title: 'Панель',
      component: (
          <Layout fullscreen>
            <Menu><Commands/></Menu>
          </Layout>
      ),
    };
  },
};
