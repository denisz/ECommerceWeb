import React from 'react';
import Layout from 'components/Layout';
import Login from './Login';

export default {
  path: '/login',

  async action() {
    return {
      title: 'Login',
      component: <Layout fullscreen><Login /></Layout>,
    };
  },
};
