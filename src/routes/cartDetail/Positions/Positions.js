import React from 'react';
import PropTypes from 'prop-types';
import { StoreComponent } from 'modules/Flux';
import Title from 'components/Title';
import Button from 'components/Button';
import Currency from 'components/Currency';
import Toolbar from 'components/ButtonToolbar';
import { NavAdapter } from 'modules/NavController';
import Cart from 'flux/Cart';
import Actions from 'flux/CartActions';
import history from 'core/history';
import CartItem from './CartItem';
import './Positions.css';

const EmptyCart = () => (
  <div className="Positions">
    <div className="Positions__empty">Ваша корзина пуста</div>
    <Toolbar center className="Cart-detail__button-toolbar">
      <Button
        onClick={() => history.push('/') }
        className="Positions__back">В каталог</Button>
    </Toolbar>

  </div>
);

export default class Positions extends StoreComponent {
  getInitialStore() {
    return [Cart];
  }

  retrieveStoreData(store, attrs) {
    return {
      price: attrs.price || 0,
      isEmpty: store.isEmpty(),
      discount: attrs.discount,
      positions: attrs.positions || [],
    }
  }

  render() {
    const { positions, price, discount, isEmpty } = this.state;
    const { adapter } = this.context;

    if (isEmpty) return <EmptyCart/>;

    return (
      <div className="Positions">
        <Title>Корзина</Title>
        <div className="Positions__grid">
          {
            positions
              .map((i)=><CartItem

              price={i.price}
              amount={i.amount}
              key={i.productSKU}
              discount={i.discount}

              name={i.product.name}
              form={i.product.form}
              producer={i.product.producer}
              pictures={i.product.pictures}

              className="Positions__grid-item"

              onDelete={() => Actions.delete(i.product)}
              onChange={value => Actions.update(i.product, value)}
              onClick={() => history.push(`/product/${i.product.SKU}`)}
            />)
          }
        </div>

        <hr className="Positions__hr"/>

        <div className="Positions__footer">
          <div className="Positions__footer-row">
            <div className="Positions__total-label">Цена товара</div>
            <div className="Positions__total">
              <Currency value={price} discount={discount} />
            </div>
          </div>
        </div>

        <Toolbar right className="Positions__button-toolbar">
          <Button
            onClick={() => history.push('/') }
            className="Positions__back">В каталог</Button>
          <Button
            onClick={adapter.handleNext}
            className="Positions__checkout">Оформить</Button>
        </Toolbar>
      </div>
    );
  }
}

Positions.propTypes = {};
Positions.defaultProps = {};

Positions.contextTypes = {
  adapter: PropTypes.instanceOf(NavAdapter).isRequired,
};
