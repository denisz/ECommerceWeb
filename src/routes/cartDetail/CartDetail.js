import React from 'react';
import { StoreComponent } from 'modules/Flux';
import Title from 'components/Title';
import Button from 'components/Button';
import Toolbar from 'components/ButtonToolbar';
import Currency from 'components/Currency';
import Cart from 'flux/Cart';
import Actions from 'flux/CartActions';
import history from 'core/history';
import CartItem from './CartItem';
import './CartDetail.css';

const EmptyCart = () => (
  <div className="Cart-detail">
    <div className="Cart-detail__empty">Ваша корзина пуста</div>
  </div>
);

export default class CartDetail extends StoreComponent {
  getInitialStore() {
    return [Cart];
  }

  retrieveStoreData(store, attrs) {
    return {
      positions: attrs.positions || [],
      totalPrice: attrs.totalPrice || 0,
    }
  }

  render() {
    const { positions, totalPrice } = this.state;

    if (positions.length === 0)
      return <EmptyCart/>;

    return (
      <div className="Cart-detail">
        <Title>Корзина</Title>
        <div className="Cart-detail__grid">
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

              onDelete={() => Actions.delete(i.product)}
              onChange={value => Actions.update(i.product, value)}
              onClick={() => history.push(`/product/${i.product.SKU}`)}
              className="Cart-detail__grid-item"
            />)
          }
        </div>

        <hr className="Cart-detail__hr"/>

        <div className="Cart-detail__footer">
          <div className="Cart-detail__total">
            <Currency value={totalPrice} />
          </div>
        </div>

        <Toolbar right className="Cart-detail__button-toolbar">
          <Button
            onClick={() => history.push('/') }
            className="Cart-detail__back">В каталог</Button>
          <Button
            onClick={() => history.push('/checkout') }
            className="Cart-detail__checkout">Оформить</Button>
        </Toolbar>
      </div>
    );
  }
}

CartDetail.propTypes = {};
CartDetail.defaultProps = {};
