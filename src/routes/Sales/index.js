import React from 'react';
import Layout from 'components/Layout';
import Sales from './Sales';

export default {
  path: '/sales',
  async action() {
    return {
      title: '',
      component: <Layout fill><Sales/></Layout>,
    };
  }
};
