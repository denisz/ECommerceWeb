import React from 'react';
import Layout from 'components/Layout';
import AsyncComponent from 'components/AsyncComponent';

const form = async () => {
  return ()=><div>Привет</div>;
};

export default {
  path: '/spec',
  async action() {
    return {
      title: '',
      component: (
          <Layout>
            <AsyncComponent resolve={form}
                            error={()=><div>Error</div>}
                            loading={()=><div>Loading</div>}/>
          </Layout>
      ),
    };
  },
};
