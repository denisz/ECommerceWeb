import React from 'react';
import Table from './Table';
import './Products.css';

export default ({ collectionId, page = 0, name }) => (
  <div className="Products">
    <div className="Products-title">{name}</div>
    <Table collectionId={collectionId} page={page} className="Products-table"/>
  </div>
)
