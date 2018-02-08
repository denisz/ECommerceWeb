import React from 'react';
import Layout from 'components/Layout';
import Test from './Test';

export default {
  path: '/test',
  async action() {
    return {
      title: 'Test',
      component: <Layout fullscreen><Test /></Layout>,
    }
  }
}

