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
              <h3 className="text-center">Страница не найдена (404-я ошибка)</h3>
              <p className="text-center"><a href="/">На главную</a></p>
            </div>
          </div>
        </Layout>
      ),
    };
  },
};
