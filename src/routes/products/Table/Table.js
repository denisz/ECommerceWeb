import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { QueryComponent } from 'modules/QueryController';
import QueryManager from 'flux/QueryManager';
import { Spinner } from '@shopify/polaris';
import history from 'core/history';
import Product from './Product';
import'./Table.css';

export default class Table extends QueryComponent {
  queryForRequest() {
    const { collectionId } = this.props;
    return QueryManager.queryForProducts(collectionId)
  }

  didSelect(model) {
    return ()=>{
      history.push(`/product/${model.id}`);
    }
  }

  render() {
    const { query } = this.state;

    return (
      <div className="Table-Products">
        {
          query.isLoading() &&
          <Spinner size="big" color="teal" />
        }

        {
          query.map((i)=><Product
            key={i.id}
            className="Table-Products-item"
            name={i.name}
            price={i.price}
            picture={i.pictures[0]}
            producer={i.producer}
            onClick={this.didSelect(i)}
          />)
        }
      </div>
    );
  }
}

Table.propTypes = {
  collectionId: PropTypes.number.isRequired
};
Table.defaultProps = {};
