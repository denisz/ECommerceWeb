import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Image from 'components/Image';
import Range from 'components/Range';
import Currency from 'components/Currency';
import './SaleProduct.css';

export default class SaleProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount : 1,
    }
  }

  handleCart = () => {
    const { amount } = this.state;
    const { onAdd } = this.props;
    onAdd(amount);
  };

  render() {
    const { className, price, discount, picture, name, producer, onClick } = this.props;
    const { amount } = this.state;
    return (
      <div className={cx('SaleProduct', className)}>
        <Image src={picture} placeholder={"no_photo.jpg"} className="SaleProduct-picture" onClick={onClick} />
        <div className="SaleProduct-info">
          <div className="SaleProduct-name">{name}</div>
          <div className="SaleProduct-producer">{producer}</div>
          <div className="SaleProduct-price">
            <Currency value={price} discount={discount}/>
          </div>
          <div className="SaleProduct-range">
            <Range value={amount} onChange={(a)=>{ this.setState({ amount: a })}} />
          </div>
          <div className="SaleProduct-cart" onClick={this.handleCart}>
            В корзину
          </div>
        </div>
      </div>
    )
  }
}

SaleProduct.propTypes = {
  name: PropTypes.string,
  onAdd: PropTypes.func,
  price: PropTypes.number,
  onClick: PropTypes.func,
  picture: PropTypes.string,
  producer: PropTypes.string,
  className: PropTypes.string,
};
SaleProduct.defaultProps = {
  onAdd: () => { },
  onClick: () => {},
};
