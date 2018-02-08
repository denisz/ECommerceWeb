import React from 'react';
import Layout from 'components/Layout';
import Link from 'components/Link';

export default {
  path: '(.*)',
  action() {
    console.log('Not Found');
    return {
      title: 'Not Found',
      status: 404,
      component: (
        <Layout fullscreen>
          <div className="vertical-center">
            <div className="container-fluid">
              <h1 className="text-center">Page Not Found.</h1>
              <p className="text-center">Go to <Link to="/">Home Page</Link></p>
            </div>
          </div>
        </Layout>
      ),
    };
  },
};
