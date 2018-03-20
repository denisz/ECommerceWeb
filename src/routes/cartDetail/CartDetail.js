import React from 'react';
import { StoreComponent } from 'modules/Flux';
import Cart from 'flux/Cart';
import Actions from 'flux/CartActions';
import history from 'core/history';
import CartItem from './CartItem';
import './CartDetail.css';

const EmptyCart = () => (
  <div className="Cart-detail">
    <div className="Cart-detail-empty">Ваша корзина пуста</div>
  </div>
);

const CheckoutButton = () => (
  <button onClick={() => history.push('/checkout') } type="button" className="btn btn-primary">Сделать заказ</button>
);

export default class CartDetail extends StoreComponent {
  getInitialStore() {
    return [Cart];
  }

  retrieveStoreData(store, attrs) {
    return {
      positions: attrs.positions || [],
      products: attrs.products || [],
    }
  }

  render() {
    const { positions, products } = this.state;

    if (positions.length === 0)
      return <EmptyCart/>;

    return (
      <div className="Cart-detail">
        <div className="Cart-detail-items">
          {
            positions
              .map((i)=>({
                ...products.find( p => p.SKU === i.productSKU),
                amount: i.amount,
              }))
              .map((i)=><CartItem
              amount={i.amount}
              key={i.id}
              name={i.name}
              producer={i.producer}
              picture={i.pictures[0]}
              onClick={() => history.push(`/product/${i.id}`)}
              onDelete={() => Actions.delete(i)}
              onChange={value => Actions.update(i, value)}
              className="Cart-detail-item"
            />)
          }
        </div>

        <div>
          <CheckoutButton/>
        </div>
      </div>
    );
  }
}

CartDetail.propTypes = {};
CartDetail.defaultProps = {};
