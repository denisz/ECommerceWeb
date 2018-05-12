import React from 'react';
import Layout from 'components/Layout';
import Page from 'components/Page';

const createContent = (content, title = 'Страница') => {
  return {
    path:`/${content}`,
    async action() {
      const file = require(`./pages/${content}.md`);
      const result = await fetch(file);
      const markdown = await result.text();
      return { title, markdown }
    },
  }
};

export default {
  path: '/page',
  children: [
    createContent('welcome'),
    createContent('privacy'),
    createContent('offer'),
  ],
  async action({ next }) {
    const route = await next();
    if (!route) {
      return null;
    }

    return {
      title: route.title,
      component: <Layout><Page markdown={route.markdown} /></Layout>,
    }
  },
};
