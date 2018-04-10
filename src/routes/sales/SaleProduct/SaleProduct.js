import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Sold from 'components/Sold';
import Range from 'components/Range';
import Button from 'components/Button';
import Picture from 'components/Picture';
import Currency from 'components/Currency';
import './SaleProduct.css';

export default class SaleProduct extends Component {
  constructor(props) {
    super(props);
    const {quantity} = props;
    this.state = {
      amount: Math.min(1, quantity),
    };
  }

  handleCart = () => {
    const {amount} = this.state;
    const {onAdd} = this.props;
    if (amount > 0) onAdd(amount);
  };

  render() {
    const {className, price, discount, quantity, pictures, name, producer, onClick} = this.props;
    const {amount} = this.state;

    return (
        <div className={cx('Sale-product', className)}>
          <div className="Sale-product__picture_container">
            <Sold disabled={quantity > 0}/>
            <Picture src={`/img/${pictures[0]}`}
                     className="Sale-product__picture" onClick={onClick}/>
          </div>
          <div className="Sale-product__info">
            <div className="Sale-product__name">{name}</div>
            <div className="Sale-product__producer">{producer}</div>
            <div className="Sale-product__price">
              <Currency value={price} discount={discount}/>
            </div>
            <div className="Sale-product__range">
              <Range
                  min={Math.min(1, quantity)}
                  max={2}
                  value={amount}
                  disabled={quantity === 0}
                  onChange={a => {
                    this.setState({amount: a});
                  }}/>
            </div>
            <Button
                disabled={quantity === 0}
                onClick={this.handleCart}>
              В корзину
            </Button>
          </div>
        </div>
    );
  }
}

SaleProduct.propTypes = {
  name: PropTypes.string,
  onAdd: PropTypes.func,
  price: PropTypes.number,
  discount: PropTypes.shape({
    type: PropTypes.any,
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
  onAdd: () => {
  },
  onClick: () => {
  },
};
