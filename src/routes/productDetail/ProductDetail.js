import React from 'react';
import { StoreComponent } from 'modules/Flux';
import Cart from 'flux/Cart';
import Product from 'flux/Product';
import Actions from 'flux/CartActions';
import Carousel from 'components/Carousel';
import Button from 'components/Button';
import Image from 'components/Image';
import Range from 'components/Range';
import Currency from 'components/Currency';
import { toast } from 'react-toastify';
import { css } from 'glamor';
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
  };

  render() {
    const { name, discount, pictures, price, form, factor, producer, amount } = this.state;

    return (
      <div className="Product-detail">
        <div className="Product-detail__row">
          <div className="Product-detail__view">
            <Carousel
              dots
              arrows={false}
              infinity={false}
              className="Product-detail__carousel">
              {
                pictures.map((src, idx)=>(
                  <div key={idx} className="Product-detail__carousel-image">
                    <Image src={src} placeholder={"no_photo.jpg"} />
                  </div>
                ))
              }
            </Carousel>
          </div>
          <div className="Product-detail__info">
            <div className="Product-detail__name">
              {name}
            </div>
            <div className="Product-detail__producer">
              {producer}
            </div>
            <div>
              <div className="Product-detail__factor">
                {factor}
              </div>
              <div className="Product-detail__form">
                {form}
              </div>
            </div>
            <div className="Product-detail__price">
              <Currency value={price} discount={discount} />
            </div>
            <div className="Product-detail__range">
              <Range value={amount} onChange={(a)=>{ this.setState({ amount: a })}} />
            </div>
            <Button onClick={this.handleCart} className="Product-detail__cart">
              В корзину
            </Button>
          </div>
        </div>
        <div className="Product-detail__description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
      </div>
    );
  }
}

ProductDetail.propTypes = {};
ProductDetail.defaultProps = {};
