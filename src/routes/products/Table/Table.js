import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { QueryComponent, PaginationView } from 'modules/QueryController';
import QueryManager from 'flux/QueryManager';
import Loading from 'components/Loading';
import history from 'core/history';
import cx from 'classnames';
import Product from './Product';
import './Table.css';

export default class Table extends QueryComponent {
  queryForRequest() {
    const { collectionId } = this.props;
    return QueryManager.queryForProducts(collectionId)
  }

  render() {
    const { query } = this.state;
    const { className } = this.props;

    return (
      <div className={cx('Table-Products', className)}>
        <div className="Table-Products-body">
          {
            query.isLoading()
            && <Loading size="big" color="teal" />
          }
          {
            query.map((i)=><Product
              key={i.id}
              className="Table-Products-item"
              name={i.name}
              price={i.price}
              discount={i.discount}
              pictures={i.pictures}
              producer={i.producer}
              onClick={()=>(history.push(`/product/${i.id}`))}
            />)
          }
        </div>
        <PaginationView query={query} className="Table-Products-pagination" />
      </div>
    );
  }
}

Table.propTypes = {
  className: PropTypes.string,
  objectsPerPage: PropTypes.number,
  collectionId: PropTypes.number.isRequired,
};
Table.defaultProps = {
  objectsPerPage: 6,
};
