import React from 'react';
import cx from 'classnames';
import Image from 'components/Image';
import Range from 'components/Range';
import './CartItem.css';

const noop = ()=>{};
export default ({ className, pictures, name, producer, amount, onClick = noop, onDelete = noop, onChange = noop}) => (
  <div className={cx('CartItem', className)}>
    <Image
      src={pictures[0]}
      onClick={onClick}
      placeholder={"no_photo.jpg"}
      className="CartItem-picture"
    />
    <div className="CartItem-describe">
      <div className="CartItem-name">{name}</div>
      <div className="CartItem-producer">{producer}</div>
    </div>

    <div className="CartItem-amount">
      <Range min={0} value={amount} onChange={onChange} />
    </div>
    <div className="CartItem-delete" onClick={onDelete}>
        delete
    </div>
  </div>
)
