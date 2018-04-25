import React from 'react';
import PropTypes from 'prop-types';
import {css} from 'glamor';
import history from 'core/history';
import Sale from 'components/Sale';
import Title from 'components/Title';
import Actions from 'flux/CartActions';
import {toast} from 'react-toastify';
import QueryManager from 'flux/QueryManager';
import {PaginationView, QueryComponent} from 'modules/QueryController';
import SaleProduct from './SaleProduct';
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
          autoClose: 2000,
          hideProgressBar: true,
          position: toast.POSITION.TOP_CENTER,
          className: css({
            top: 40,
            minHeight: 40,
          }),
        });
      } catch (e) {
        console.log(e);
        toast.error(`Ошибка при работе с корзиной`, {
          autoClose: 2000,
          hideProgressBar: true,
          position: toast.POSITION.TOP_CENTER,
          className: css({
            top: 40,
            minHeight: 40,
          }),
        });
      }
    };
  }

  render() {
    const {query} = this.state;

    return (
        <div className="Sales">
          <Title>Распродажа</Title>
          <div className="Sales__table">
            {
              query.map(i => <div key={i.id} className="Sales__table-item">
                <Sale {...i.discount} disabled={i.quantity === 0}
                      className="Sales__badge"/>
                <SaleProduct
                    name={i.name}
                    price={i.price}
                    producer={i.producer}
                    discount={i.discount}
                    pictures={i.pictures}
                    quantity={i.quantity}
                    onClick={() => (history.push(`/product/${i.SKU}`))}
                    onAdd={this.handleAdd(i)}
                    className="Sales__table-item__product"
                />
              </div>)
            }
          </div>
          <PaginationView query={query} className="Sales__pagination"/>

          <div className="Sales__info">
            <Title>Скидки</Title>
            <p>
              В магазине действует специальная система скидок, которая зависит
              от суммы покупки. Скидка рассчитывается автоматически в корзине
              покупок при оформлении заказа.
            </p>
            <div>
              <h5>При покупке на сумму:</h5>
              <ul className="list-unstyled">
                <li>от 6000 руб. - 2,5%</li>
                <li>от 10 000 руб. - 5%</li>
                <li>от 20 000 руб. - 7,5%</li>
              </ul>
            </div>
            <p>
              На товары участвующие в распродаже система скидок не
              распространяется, и при совместном заказе с другими товарами их
              стоимость не учитывается в общей сумме заказа для расчета скидки.
            </p>
            <p>
              В один заказ не может быть включено более двух товаров участвующих
              в распродаже. На второй заказ, товара по распродаже, в течении 24
              часов не распространяется бесплатная доставка.
            </p>
          </div>
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
