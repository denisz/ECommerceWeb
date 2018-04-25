import React from 'react';
import Title from 'components/Title';
import Table from 'components/Table';
import QueryManager from 'flux/QueryManager';
import './Products.css';

export default ({ sku, page = 0, name }) => (
  <div className="Products">
    <Title>{name}</Title>
    <Table
        query={QueryManager.queryForProducts(sku)}
        objectsPerPage={12}
        route={`/products/${sku}`}
        page={page}
    />
  </div>
)
