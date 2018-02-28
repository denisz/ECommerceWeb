import React from 'react';
import { StoreComponent } from 'modules/Flux';
import Cart from 'flux/Cart';
import Actions from 'flux/CartActions';
import './CartDetail.css';

export default class CartDetail extends StoreComponent {
  getInitialStore() {
    return [Cart];
  }

  getStoreKeys() {
    return ['items'];
  }

  render() {
    return (
      <div className="Cart-detail">

      </div>
    );
  }
}

CartDetail.propTypes = {};
CartDetail.defaultProps = {};
