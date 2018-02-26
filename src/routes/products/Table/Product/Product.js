import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import Image from 'components/Image';
import Currency from 'components/Currency';
import cx from 'classnames';
import './Product.css';

export default class Product extends PureComponent {
  render() {
    const { name, picture, producer, price, className, onClick } = this.props;

    return (
      <div className={cx('Product-list', className)} onClick={onClick}>
        <LazyLoad height="200">
          <Image src={picture} />
        </LazyLoad>
        <div className="Product-list-title">{name}</div>
        <div className="Product-list-producer">{producer}</div>
        <div className="Product-list-price">
          <Currency value={price}/>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  name: PropTypes.string,
  picture: PropTypes.string,
  price: PropTypes.number,
  currency: PropTypes.string,
  producer: PropTypes.string,

};
Product.defaultProps = {
  currency: 'RUB',
  onClick: ()=>{},
};
