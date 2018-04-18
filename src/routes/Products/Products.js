import React from 'react';
import Title from 'components/Title';
import Table from './Table';
import './Products.css';

export default ({ sku, page = 0, name }) => (
  <div className="Products">
    <Title>{name}</Title>
    <Table sku={sku} page={page} className="Products__table"/>
  </div>
)
