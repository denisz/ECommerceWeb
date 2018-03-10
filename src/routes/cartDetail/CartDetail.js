import React from 'react';
import { StoreComponent } from 'modules/Flux';
import Cart from 'flux/Cart';
import Actions from 'flux/CartActions';
import history from 'core/history';
import CartItem from './CartItem';
import './CartDetail.css';

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
      return (<div className="Cart-detail">
        <div className="Cart-detail-empty">Ваша корзина пуста</div>
      </div>);

    return (
      <div className="Cart-detail">
        <div className="Cart-detail-items">
          {
            positions
              .map((i)=>({
                amount: i.amount,
                ...products.find( p => p.id === i.productID)
              }))
              .map((i)=><CartItem
              amount={i.amount}
              key={i.id}
              name={i.name}
              producer={i.producer}
              picture={i.pictures[0]}
              onDelete={()=>Actions.delete(i.id)}
              onChange={(value)=>Actions.update({
                productID: i.id,
                amount: value,
              })}
              className="Cart-detail-item"
            />)
          }
        </div>

        <div>
          <button onClick={() => (history.push('/checkout')) }
                  type="button"
                  className="btn btn-primary">Сделать заказ</button>
        </div>

      </div>
    );
  }
}

CartDetail.propTypes = {};
CartDetail.defaultProps = {};
