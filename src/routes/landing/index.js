import React from 'react';
import Layout from 'components/Layout';
import Landing from './Landing';

export default {
  path: '/',
  async action() {
    return {
      title: 'Test',
      component: <Layout><Landing /></Layout>,
    }
  }
}

