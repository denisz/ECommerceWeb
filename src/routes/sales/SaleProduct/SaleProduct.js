import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from 'components/Button';
import Picture from 'components/Picture';
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
    const { className, price, discount, pictures, name, producer, onClick } = this.props;
    const { amount } = this.state;

    return (
      <div className={cx('Sale-product', className)}>
        <Picture src={`/img/${pictures[0]}`} className="Sale-product__picture" onClick={onClick} />
        <div className="Sale-product__info">
          <div className="Sale-product__name">{name}</div>
          <div className="Sale-product__producer">{producer}</div>
          <div className="Sale-product__price">
            <Currency value={price} discount={discount}/>
          </div>
          <div className="Sale-product__range">
            <Range value={amount} onChange={ a =>{ this.setState({ amount: a }) }} />
          </div>
          <Button onClick={this.handleCart}>
            В корзину
          </Button>
        </div>
      </div>
    )
  }
}

SaleProduct.propTypes = {
  name: PropTypes.string,
  onAdd: PropTypes.func,
  price: PropTypes.number,
  discount: PropTypes.shape({
    type: PropTypes.string,
    amount: PropTypes.number,
  }),
  onClick: PropTypes.func,
  pictures: PropTypes.arrayOf(PropTypes.string),
  producer: PropTypes.string,
  className: PropTypes.string,
};
SaleProduct.defaultProps = {
  pictures: [],
  discount: null,
  onAdd: () => { },
  onClick: () => {},
};
