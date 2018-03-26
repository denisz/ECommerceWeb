import React from 'react';
import PropTypes from 'prop-types';
import { QueryComponent, PaginationHistoryView as PaginationView } from 'modules/QueryController';
import QueryManager from 'flux/QueryManager';
import Loading from 'components/Loading';
import history from 'core/history';
import cx from 'classnames';
import Product from './Product';
import './Table.css';

export default class Table extends QueryComponent {
  queryForRequest() {
    const { sku } = this.props;
    return QueryManager.queryForProducts(sku)
  }

  render() {
    const { query } = this.state;
    const { className, sku } = this.props;

    return (
      <div className={cx('Table-Products', className)}>
        <div className="Table-Products__grid">
          {
            query.isLoading() && <Loading size="big" color="teal" />
          }
          {
            query.map( i => <Product
              key={i.id}
              className="Table-Products__grid-item"
              name={i.name}
              price={i.price}
              discount={i.discount}
              pictures={i.pictures}
              producer={i.producer}
              onClick={()=>(history.push(`/product/${i.SKU}`))}
            />)
          }
        </div>
        <PaginationView
          query={query}
          className="Table-Products__pagination"
          createLink={(page)=> `/products/${sku}/page/${page}`}
        />
      </div>
    );
  }
}

Table.propTypes = {
  className: PropTypes.string,
  page: PropTypes.number,
  objectsPerPage: PropTypes.number,
  sku: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};
Table.defaultProps = {
  page: 0,
  objectsPerPage: 12,
};
