import React from 'react';
import Layout from 'components/Layout';
import App from './App';

export default {
  path: '/',
  async action() {
    return {
      title: 'App',
      component: <Layout fullscreen><App /></Layout>,
    }
  }
}

