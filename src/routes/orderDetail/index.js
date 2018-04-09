import React from 'react';
import Layout from 'components/Layout';
import OrderActions from 'flux/OrderActions';

export default {
    path: '/order/:invoice',
    async action({ params: { invoice } }) {
        await OrderActions.fetch(invoice)

        return {
            title: '',
            component: <Layout></Layout>,
        };
    }
};
