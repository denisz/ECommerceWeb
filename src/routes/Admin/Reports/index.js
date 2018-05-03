import React from 'react';
import Layout from 'components/Layout';
import Menu from '../Menu';
import Reports from './Reports';

export default {
  path: '/reports',
  async action() {
    return {
      title: 'Отчеты',
      component: (
          <Layout fullscreen>
            <Menu><Reports/></Menu>
          </Layout>
      ),
    };
  },
};
