import React from 'react';
import Layout from 'components/Layout';
import ProfileActions from 'flux/ProfileActions';
import AuthStore from 'flux/Auth';
import Error from 'modules/Request/ClientError';
import Profile from './Profile';

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

        await ProfileActions.fetch(id);

        return {
          title: 'Profile',
          component: <Layout><Profile key={`profile-${id}`} /></Layout>,
        };
      },
    }
  ],

  async action({ next }) {
    return next();
  },
};
