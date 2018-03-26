import React from 'react';
import cx from 'classnames';
import './Collection.css';

export default ({ name, className, onClick=()=>{} })=>
(
  <div className={cx('Collection', className)} onClick={onClick}>
    <div className="Collection__name">{name}</div>
  </div>
)
