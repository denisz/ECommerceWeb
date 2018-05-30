import React from 'react';
import cx from 'classnames';
import Range from 'components/Range';
import Delete from 'components/Delete';
import Picture from 'components/Picture';
import { Price } from 'components/Currency';
import './Position.css';

const noop = ()=>{};
export default ({ className, pictures, name, price, producer, form, amount, onClick = noop, onDelete = noop, onChange = noop}) => (
  <div className={cx('Position', className)}>
    {
      pictures.length > 0 &&
      <Picture
          src={`img/${pictures[0]}`}
          onClick={onClick}
          placeholder={"no_photo.jpg"}
          className="Position__picture"
      />
    }

    <div className="Position__body">
      <div className="Position__describe">
        <div className="Position__name">{name}</div>
        <div className="Position__producer">{producer}</div>
        <div className="Position__form">{form}</div>
      </div>

      <div className="Position__toolbar">
        <div className="Position__amount">
          <Range min={0} value={amount} onChange={onChange} />
        </div>

        <div className="Position__price">
          <Price value={price} />
        </div>
      </div>

    </div>

    <div className="Position__delete">
      <Delete onClick={onDelete} />
    </div>
  </div>
)
