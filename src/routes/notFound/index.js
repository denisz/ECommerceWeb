import React from 'react';
import Layout from 'components/Layout';
import './NotFound.css'



export default {
  path: '(.*)',
  action() {
    return {
      title: 'Not Found',
      status: 404,
      component: (
        <Layout fullscreen>
          <div className="NotFound">
            <div className="container-fluid">
              <h4 className="text-center">
                <span className="NotFound__code">404</span>
                <small>
                  <a href="/" className="NotFound__link text-muted">На главную</a>
                </small>
              </h4>
            </div>
          </div>
        </Layout>
      ),
    };
  },
};
