import React from 'react';
import Layout from 'components/Layout';
import Action from 'flux/CollectionActions';
import Collection from 'flux/Collection';
import Products from './Products';

export default {
  path: '/products',

  children: [
    {
      path: '/:id/page/:page',
      async action({ params: { id, page } }) {
        await Action.fetchIfNeeded(id);

        return {
          title: Collection.get('name'),
          component: (
            <Layout>
              <Products
                page={parseInt(page, 10)}
                collectionId={id}
                key={`products-${id}`}
                name={Collection.get('name')}
              />
            </Layout>
          ),
        };
      },
    },
    {
      path: '/:id',
      async action({ params: { id } }) {
        await Action.fetchIfNeeded(id);

        return {
          title: Collection.get('name'),
          component: (
            <Layout>
              <Products
                collectionId={id}
                key={`products-${id}`}
                name={Collection.get('name')}
              />
            </Layout>
          ),
        };
      },
    },
  ],

  async action({ next }) {
    return next();
  },
};
