import React from 'react';
import cx from 'classnames';
import Range from 'components/Range';
import Delete from 'components/Delete';
import Picture from 'components/Picture';
import Currency from 'components/Currency';
import './CartItem.css';

const noop = ()=>{};
export default ({ className, pictures, name, price, discount, producer, form, amount, onClick = noop, onDelete = noop, onChange = noop}) => (
  <div className={cx('Cart-item', className)}>
    <Picture
      src={`img/${pictures[0]}`}
      onClick={onClick}
      placeholder={"no_photo.jpg"}
      className="Cart-item__picture"
    />

    <div className="Cart-item__body">
      <div className="Cart-item__describe">
        <div className="Cart-item__name">{name}</div>
        <div>
          <div className="Cart-item__producer">{producer}</div>
          <div className="Cart-item__form">{form}</div>
        </div>
      </div>

      <div className="Cart-item__amount">
        <Range min={0} value={amount} onChange={onChange} />
      </div>

      <div className="Cart-item__price">
        <Currency value={price} discount={discount} />
      </div>
    </div>

    <div className="Cart-item__delete">
      <Delete onClick={onDelete} />
    </div>
  </div>
)
