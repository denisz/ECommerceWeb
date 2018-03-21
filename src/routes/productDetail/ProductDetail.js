import React from 'react';
import { StoreComponent } from 'modules/Flux';
import Cart from 'flux/Cart';
import Product from 'flux/Product';
import Actions from 'flux/CartActions';
import Carousel from 'components/Carousel';
import Image from 'components/Image';
import Range from 'components/Range';
import Currency from 'components/Currency';
import { toast } from 'react-toastify';
import './ProductDetail.css';

export default class ProductDetail extends StoreComponent {
  getInitialState() {
    return {
      amount: 1,
    };
  }

  getInitialStore() {
    return [Product, Cart];
  }

  handleCart = async () => {
    const { amount, ...product } = this.state;
    try {
      await Actions.insert(product, amount);
      const { name } = product;
      toast.info(`${name} добавлен в корзину покупок!`, {
        hideProgressBar: true,
        position: toast.POSITION.TOP_CENTER
      });
    } catch(e) {
      console.log(e);
      toast.error(`Ошибка при работе с корзиной`, {
        hideProgressBar: true,
        position: toast.POSITION.TOP_CENTER
      });
    }
  };

  render() {
    const { name, discount, pictures, price, form, factor, producer, amount } = this.state;

    return (
      <div className="Product-detail">
        <div className="Product-detail-row">
          <div className="Product-detail-view">
            <Carousel
              dots
              arrows={false}
              infinity={false}
              className="Product-detail-carousel">
              {
                pictures.map((src, idx)=>(
                  <div key={idx} className="Product-detail-carousel-image">
                    <Image src={src} placeholder={"no_photo.jpg"} />
                  </div>
                ))
              }
            </Carousel>
          </div>
          <div className="Product-detail-info">
            <div className="Product-detail-name">
              {name}
            </div>
            <div className="Product-detail-producer">
              {producer}
            </div>
            <div className="Product-detail-factor">
              {factor}
            </div>
            <div className="Product-detail-form">
              {form}
            </div>
            <div className="Product-detail-price">
              <Currency value={price} discount={discount} />
            </div>
            <div className="Product-detail-range">
              <Range value={amount} onChange={(a)=>{ this.setState({ amount: a })}} />
            </div>
            <div className="Product-detail-cart" onClick={this.handleCart}>
              В корзину
            </div>
          </div>
        </div>
        <div className="Product-detail-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
      </div>
    );
  }
}

ProductDetail.propTypes = {};
ProductDetail.defaultProps = {};
