import React, { Component } from 'react';
import PropTypes from 'prop-types';
import history from 'core/history';
import Actions from 'flux/CartActions';
import { toast } from 'react-toastify';
import QueryManager from 'flux/QueryManager';
import { QueryComponent, PaginationView } from 'modules/QueryController';
import SaleProduct from './SaleProduct';
import SaleBadge from './SaleBadge';
import './Sales.css';

export default class Sales extends QueryComponent {
  queryForRequest() {
    return QueryManager.queryForSales();
  }

  handleAdd(product) {
    return async (amount) => {
      const {id: productID, name} = product;
      await Actions.insert({amount, productID});
      toast.info(`${name} добавлен в корзину покупок!`, {
        hideProgressBar: true,
        position: toast.POSITION.TOP_CENTER
      })
    }
  }

  handleClick(product) {
    return () => {
      history.push(`/product/${product.id}`)
    }
  }

  render() {
    const { query } = this.state;

    return (
      <div className="SaleProducts">
        <div className="SaleProducts-title">Распродажа</div>
        <div className="SaleProducts-table">
          {
            query.map(i => <div key={i.id} className="SaleProducts-table-item">
              <SaleBadge {...i.discount} className="SaleProducts-table-item-badge"/>
              <SaleProduct
                name={i.name}
                price={i.price}
                producer={i.producer}
                picture={i.pictures[0]}
                onClick={this.handleClick(i)}
                onAdd={this.handleAdd(i)}
                className="SaleProducts-table-item-product"
              />
            </div>)
          }
        </div>
        <PaginationView query={query} className="SaleProducts-pagination" />
      </div>
    );
  }
}

Sales.propTypes = {
  objectsPerPage: PropTypes.number,
};
Sales.defaultProps = {
  objectsPerPage: 5,
};
