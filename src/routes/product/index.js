import React from 'react';
import Layout from 'components/Layout';
import AuthStore from 'flux/Auth';
import Actions from 'flux/ProductActions';
import Product from './Product';

export default {
  path: '/profile',

  children: [
    {
      path: '/',
      async action() {
        const id = AuthStore.get('id');

        if (!id) {
          throw new Error('No user with this access token was found', 401);
        }

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
