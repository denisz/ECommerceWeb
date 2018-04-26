import React from 'react';
import Layout from 'components/Layout';
import AsyncComponent from 'components/AsyncComponent';
import {Wait} from 'modules/Lock';

const form = async () => {
  // await Wait.seconds(2);
  // throw new Error("test error");
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
