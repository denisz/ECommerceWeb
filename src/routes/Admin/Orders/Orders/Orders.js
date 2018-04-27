import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import {QueryListView} from 'modules/QueryController';
import {QueryComponent} from 'modules/Flux';
import {DialogFactory} from 'modules/Form';
import Date from 'components/Date';
import Title from 'components/Title';
import Phone from 'components/Phone';
import Email from 'components/Email';
import Invoice from 'components/Invoice';
import {Price} from 'components/Currency';
import Shipping from 'components/Shipping';
import Status from 'components/OrderStatus';
import Address, {parse} from 'components/Address';
import Actions from 'flux/AdminActions';
import Admin from 'flux/Admin';
import OrderEdit from 'dialogs/OrderEdit';
import './Orders.css';
import * as keys from './constants';

const kDialogKey = 'dialog';

export default class Orders extends QueryComponent {
  getInitialStore() {
    return [Admin]
  }

  async didChangeStoreState() {
    const { query } = this.state;
    await query.fetchCurrentPage();
  }

  handleRowClick = (row) => {
    const {dialogs} = this.state;

    dialogs.showDialog(kDialogKey, {
      header: `Order №${row[keys.kInvoiceKey]}`,
      showHeader: true,
      size: 'large',
      Component: <OrderEdit submitCancel
                            value={row}
                            onSubmit={async (attrs) => {
                              await Actions.updateOrder(row, attrs);
                            }}/>,
    });
  };

  renderCell = (cell, order) => {
    const address = parse(order[keys.kAddressKey]);

    switch (cell) {
      case keys.kDateAndInvoiceCell:
        return (
            <div className="Orders__item">
              <Invoice value={order[keys.kInvoiceKey]}/>
              <Date value={order[keys.kCreatedAtKey]}/>
              <div>{address.name}</div>
            </div>);
      case keys.kStatusCell:
        return (
            <div className="Orders__item">
              <Status value={order[keys.kStatusKey]}/>
            </div>);
      case keys.kCreatedAtCell:
        return (
            <div className="Orders__item">
              <Date value={order[keys.kCreatedAtKey]}/>
            </div>
        );
      case keys.kContactsCell:
        return (
            <div className="Orders__item">
              <Email email={address.email}/><br/>
              <Phone tel={address.phone}/>
            </div>
        );
      case keys.kInvoiceCell:
        return (
            <div className="Orders__item">
              <Invoice value={order[keys.kInvoiceKey]}/>
            </div>
        );
      case keys.kDeliveryCell:
        return (
            <div className="Orders__item">
              <Shipping {...order[keys.kDeliveryKey]}/>
            </div>
        );
      case keys.kAddressCell:
        return (
            <div className="Orders__item">
              <Address {...address}/>
            </div>);
      case keys.kTotalCell:
        return (
            <div className="Orders__item">
              <Price value={order[keys.kTotalKey]}
                     className="Orders__currency_price"/>
            </div>
        );
      default :
        return <div>--</div>;
    }
  };

  render() {
    const {query, dialogs} = this.state;
    const {title, className} = this.props;

    return (
        <div className={cx('Orders', className)}>
          <Title>{title}</Title>
          <QueryListView allowSelect
                         hideSelectColumn
                         keyField={'id'}
                         classNameContainer="Orders__table_wrapper"
                         className="Orders__table"
                         headerStyle={{
                           color: '#000',
                           fontWeight: 400,
                           fontSize: 14,
                         }}
                         headers={keys.headers}
                         onRowClick={this.handleRowClick}
                         emptyView={() => 'Нет данных'}
                         query={query}
                         renderCell={this.renderCell}
          />
          <DialogFactory dialogKey={kDialogKey} dialogs={dialogs}/>
        </div>
    );
  }
}

Orders.propTypes = {
  page: PropTypes.number,
  title: PropTypes.string,
  className: PropTypes.string,
  objectsPerPage: PropTypes.number,
};
Orders.defaultProps = {
  page: 0,
  title: 'Заказы',
  objectsPerPage: 25,
};
