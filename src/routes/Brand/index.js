import React from 'react';
import Layout from 'components/Layout';
import Brand from './Brand';

export default {
  path: '/brand',

  children: [
    {
      path: '/:producer/page/:page',
      async action({ params: { producer, page } }) {

        return {
          title: producer,
          component: (
              <Layout fill>
                <Brand
                    page={parseInt(page, 10)}
                    producer={producer}
                    key={`products-${producer}`}
                    name={producer}
                />
              </Layout>
          ),
        };
      },
    },
    {
      path: '/:producer',
      async action({ params: { producer } }) {
        return {
          title: producer,
          component: (
              <Layout fill>
                <Brand
                    producer={producer}
                    key={`products-${producer}`}
                    name={producer}
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
