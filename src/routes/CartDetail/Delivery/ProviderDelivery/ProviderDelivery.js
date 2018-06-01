import React from 'react';
import cx from 'classnames';
import Image from 'components/Image';
import './ProviderDelivery.css';

/**
 * options = [{value: '', image: '', disabled: false} ]
 * @param options
 * @param className
 * @param disabled
 * @param value
 * @param onChange
 * @returns {*}
 */
export default ({options, className, disabled, value, onChange}) => (
    <div className={cx('ProviderDelivery__providers', {
      'ProviderDelivery__providers--disabled': disabled,
    })}>
      {
        options.map((i, idx) => (
            <div key={idx}
                 className={cx('ProviderDelivery__provider', {
                   'ProviderDelivery__provider--active': value === i.value,
                   'ProviderDelivery__provider-disabled': i.disabled,
                 })}
                 onClick={() => onChange(i.value)}
            >
              <Image src={i.image}/>
            </div>
        ))
      }
    </div>
)