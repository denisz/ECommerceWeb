import React from 'react';
import Layout from 'components/Layout';
import Action from 'flux/CollectionActions';
import Collection from 'flux/Collection';
import Products from './Products';

export default {
  path: '/products',

  children: [
    {
      path: '/:sku/page/:page',
      async action({ params: { sku, page } }) {
        await Action.fetchIfNeeded(sku);

        return {
          title: Collection.get('name'),
          component: (
            <Layout>
              <Products
                page={parseInt(page, 10)}
                sku={sku}
                key={`products-${sku}`}
                name={Collection.get('name')}
              />
            </Layout>
          ),
        };
      },
    },
    {
      path: '/:sku',
      async action({ params: { sku } }) {
        await Action.fetchIfNeeded(sku);

        return {
          title: Collection.get('name'),
          component: (
            <Layout>
              <Products
                sku={sku}
                key={`products-${sku}`}
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
