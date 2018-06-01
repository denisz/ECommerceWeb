import React from 'react';
import Image from 'components/Image';
import cx from 'classnames';
import './MethodDelivery.css';

/**
 * options = [{label: '', value: '', image: '', disabled: false} ]
 * @param options
 * @param className
 * @param disabled
 * @param value
 * @param onChange
 * @returns {*}
 */
export default ({options, className, disabled, value, onChange}) => (
    <div className={cx('MethodDelivery__methods', {
      'MethodDelivery__methods--disabled': disabled,
    }, className)}>
      {
        options.map((i, idx) => (
            <div key={idx}
                 className={cx('MethodDelivery__method', {
                   'MethodDelivery__method--active': value === i.value,
                   'MethodDelivery__method--disabled': i.disabled,
                 })}
                 onClick={() => onChange(i.value)}
            >
              <Image src={i.image}/>
              <div className="MethodDelivery__method-title">{i.label}</div>
            </div>
        ))
      }
    </div>
)