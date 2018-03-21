import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
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
      <div className={cx('SaleProduct', className)}>
        <Picture src={`/img/${pictures[0]}`} className="SaleProduct-picture" onClick={onClick} />
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
