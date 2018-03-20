import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import Image from 'components/Image';
import Currency from 'components/Currency';
import Placeholder from 'components/Placeholder';
import cx from 'classnames';
import './Product.css';

export default class Product extends PureComponent {
  render() {
    const { name, pictures, producer, price, discount, className, onClick } = this.props;

    return (
      <div className={cx('Product-list', className)} onClick={onClick}>
        <LazyLoad once
                  width={270}
                  height={300}
                  offset={100}
                  debounce={100}
                  placeholder={<Placeholder className="Product-list-picture" />}>
          <Image
            src={pictures[0]}
            placeholder={"no_photo.jpg"}
            className="Product-list-picture"
          />
        </LazyLoad>
        <div className="Product-list-name">{name}</div>
        <div className="Product-list-producer">{producer}</div>
        <div className="Product-list-price">
          <Currency value={price} discount={discount}/>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  name: PropTypes.string,
  pictures: PropTypes.arrayOf(PropTypes.string),
  discount: PropTypes.shape({
    type: PropTypes.string,
    amount: PropTypes.number,
  }),
  price: PropTypes.number,
  currency: PropTypes.string,
  producer: PropTypes.string,

};
Product.defaultProps = {
  currency: 'RUB',
  discount: null,
  pictures: [],
  onClick: ()=>{},
};
