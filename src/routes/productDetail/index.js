import React from 'react';
import Layout from 'components/Layout';
import Actions from 'flux/ProductActions';
import 'flux/Product';
import Product from './ProductDetail';

export default {
  path: '/product',

  children: [
    {
      path: '/:id',
      async action({ params: { id } }) {
        await Actions.fetch(id);

        return {
          title: 'Profile',
          component: <Layout><Product key={`product-${id}`}/></Layout>,
        };
      },
    }
  ],

  async action({ next }) {
    return next();
  },
};
