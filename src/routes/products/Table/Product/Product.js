import React from 'react';
import LazyLoad from 'react-lazyload';
import Picture from 'components/Picture';
import Currency from 'components/Currency';
import Placeholder from 'components/Placeholder';
import cx from 'classnames';
import './Product.css';

export default ({ name, pictures = [], producer, price, discount, className, onClick }) => (
  <div className={cx('Product-list', className)} onClick={onClick}>
    <LazyLoad once
              width={270}
              height={300}
              offset={100}
              debounce={100}
              placeholder={<Placeholder className="Product-list__picture" />}>
      <Picture src={`/img/${pictures[0]}`} className="Product-list__picture"/>
    </LazyLoad>
    <div className="Product-list__name">{name}</div>
    <div className="Product-list__producer">{producer}</div>
    <div className="Product-list__price">
      <Currency value={price}/>
    </div>
  </div>
)
