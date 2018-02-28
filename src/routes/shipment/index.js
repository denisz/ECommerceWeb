import React from 'react';
import Layout from 'components/Layout';
import Shipment from './Shipment';

export default {
  path: '/shipment',
  async action() {
    return {
      title: '',
      component: <Layout><Shipment/></Layout>,
    };
  }
};
