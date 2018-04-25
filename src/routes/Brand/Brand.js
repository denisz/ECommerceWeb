import React from 'react';
import Title from 'components/Title';
import Table from 'components/Table';
import QueryManager from 'flux/QueryManager';
import './Brand.css';

export default ({ producer, page = 0, name }) => (
    <div className="Brand">
      <Title>{name}</Title>
      <Table
          query={QueryManager.queryForProducer(producer)}
          objectsPerPage={12}
          route={`/brand/${producer}`}
          page={page}
      />
    </div>
)