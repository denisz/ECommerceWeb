import React from 'react';
import Layout from 'components/Layout';
import ProductActions from 'flux/ProductActions';
import NotationActions from 'flux/NotationActions';
import Product from 'flux/Product';
import 'flux/Notation';
import ProductDetail from './ProductDetail';

export default {
  path: '/product',

  children: [
    {
      path: '/:id',
      async action({ params: { id } }) {
        await ProductActions.fetch(id);
        await NotationActions.fetch(id);

        return {
          title: Product.get('name', 'Store'),
          component: <Layout fill><ProductDetail key={`product-${id}`}/></Layout>,
        };
      },
    }
  ],

  async action({ next }) {
    return next();
  },
};
