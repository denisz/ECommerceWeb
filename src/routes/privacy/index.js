import React from 'react';
import Layout from 'components/Layout';
import Page from 'components/Page';
import './Privacy.css';

import myMarkdownFile from './privacy.md';

export default {

  path: '/privacy',

  async action() {
    const { response } = await fetch(myMarkdownFile);
    const data = {
      html: response.text(),
    };

    return {
      title: data.title,
      component: <Layout fullscreen><Page {...data} /></Layout>,
    };
  },

};
