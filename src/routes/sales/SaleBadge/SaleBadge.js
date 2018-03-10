import React from 'react';
import Currency from 'components/Currency';
import cx from 'classnames';
import './SaleBadge.css';

const Percentage = ({ amount, className }) => (
  <div className={cx('SaleBadge-percentage', className, {
    'five': amount === 5,
    'ten': amount === 10,
    'fifteen': amount === 15,
  })}>
    {`-${amount}%`}
  </div>
);

const FixedAmount = ({ amount, className }) => (
  <div className={cx('SaleBadge-fixedAmount', className)}>
    -<Currency value={amount}/>
  </div>
);

const FreeShipping = ({ className }) => (
  <div className={cx('SaleBadge-freeShipping', className)}>
    Бесплатная доставка
  </div>
);

/**
  DiscountTypePercentage DiscountType  = 0
  DiscountTypeFixedAmount DiscountType = 1
  DiscountTypeFreeShipping DiscountType = 2
 * @param type
 * @param amount
 * @param className
 * @returns {XML}
 */
export default ({ type, amount, className }) => {
  switch(type) {
    case 0: return <Percentage amount={amount} className={className} />;
    case 1: return <FixedAmount amount={amount} className={className} />;
    case 2: return <FreeShipping className={className} />;
    default: return <div />
  }
}
