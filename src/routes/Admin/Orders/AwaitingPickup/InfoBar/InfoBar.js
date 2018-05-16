import React from 'react';
import cx from 'classnames';
import Button from 'components/Button';
import './InfoBar.css';

export default ({title, disabled, locked, lock, subtitle, description, onSubmit, labelSubmit = 'Action'}) => (
    <div className={cx('container', 'InfoBar')}>
      <div className="InfoBar__row">
        <dl className="InfoBar__send-data">
          <dt className="text-muted">{title}</dt>
          <dd className="h2">{subtitle}</dd>
        </dl>
        <Button disabled={disabled}
                locked={locked}
                lock={lock}
                size="md"
                color="dark"
                onClick={onSubmit}>{labelSubmit}</Button>
      </div>
      <div className="InfoBar__row">
        <div className="text-muted InfoBar__send-note">
          {description}
        </div>
      </div>
    </div>
)