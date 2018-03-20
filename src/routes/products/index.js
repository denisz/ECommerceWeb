import React from 'react';
import Layout from 'components/Layout';
import Action from 'flux/CollectionActions';
import Collection from 'flux/Collection';
import Products from './Products';

export default {
  path: '/products',

  children: [
    {
      path: '/:id',
      async action({ params: { id } }) {
        await Action.fetch(id);

        return {
          title: Collection.get('name'),
          component: <Layout><Products key={`products-${id}`} /></Layout>,
        };
      },
    }
  ],

  async action({ next }) {
    return next();
  },
};
