import React from 'react';
import Layout from 'components/Layout';
import Dashboard from './Dashboard';

export default {
  path: '/dashboard',
  async action() {
    console.log("dashboard");
    return {
      title: 'Панель',
      component: <Layout fullscreen menu><Dashboard/></Layout>,
    };
  },
};
