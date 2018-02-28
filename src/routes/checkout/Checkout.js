import React from 'react';
import { StoreComponent } from 'modules/Flux';
import Cart from 'flux/Cart';
import Actions from 'flux/CartActions';
import './Checkout.css';

export default class Checkout extends StoreComponent {
  getInitialStore() {
    return [Cart];
  }

  getStoreKeys() {
    return ['items'];
  }

  render() {
    return (
      <div></div>
    );
  }
}

Checkout.propTypes = {};
Checkout.defaultProps = {};
