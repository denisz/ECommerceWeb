import React from 'react';
import Layout from 'components/Layout';
import Actions from 'flux/SettingsActions';
import Settings from 'flux/Settings';
import Landing from './Landing';

export default {
  path: '/',
  async action() {
    await Actions.fetchIfNeeded();

    return {
      title: 'Dark Waters',
      component: <Layout><Landing banners={Settings.banners}/></Layout>,
    }
  }
}

