import React from 'react';
import Layout from 'components/Layout';
import OrderActions from 'flux/OrderActions';
import OrderDetail from './OrderDetail';

export default {
  path: '/order/:invoice',
  async action({params: {invoice}}) {
    await OrderActions.fetch(invoice);

    return {
      title: '',
      component: <Layout><OrderDetail /></Layout>,
    };
  },
};
