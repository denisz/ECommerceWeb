import React from 'react';
import cx from 'classnames';
import Loader from 'react-loaders'
import 'loaders.css/loaders.css'
import './Placeholder.css';

export default ({ className }) => {
  return (
    <div className={cx('Placeholder', className)}>
      <Loader type="line-scale-pulse-out-rapid" color="black"/>
    </div>
  );
};
