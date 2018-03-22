import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
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
      try {
        await Actions.insert(product, amount);
        const {name} = product;
        toast.info(`${name} добавлен в корзину покупок!`, {
          hideProgressBar: true,
          position: toast.POSITION.TOP_CENTER,
          className: css({
            minHeight: 40
          })
        });
      } catch(e) {
        console.log(e);
        toast.error(`Ошибка при работе с корзиной`, {
          hideProgressBar: true,
          position: toast.POSITION.TOP_CENTER,
          className: css({
            minHeight: 40
          })
        });
      }
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
                discount={i.discount}
                pictures={i.pictures}
                onClick={()=>(history.push(`/product/${i.id}`))}
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
