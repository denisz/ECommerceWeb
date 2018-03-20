import React from 'react';
import cx from 'classnames';
import './Collection.css';

export default ({ name, className, onClick=()=>{} })=>
(
  <div className={cx('Collection', className)} onClick={onClick}>
    <div className="Collection-name">{name}</div>
  </div>
)
