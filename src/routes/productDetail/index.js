import React from 'react';
import Layout from 'components/Layout';
import Actions from 'flux/ProductActions';
import Product from 'flux/Product';
import ProductDetail from './ProductDetail';

export default {
  path: '/product',

  children: [
    {
      path: '/:id',
      async action({ params: { id } }) {
        await Actions.fetch(id);

        return {
          title: Product.get('name', 'App'),
          component: <Layout><ProductDetail key={`product-${id}`}/></Layout>,
        };
      },
    }
  ],

  async action({ next }) {
    return next();
  },
};
