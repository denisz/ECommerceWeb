import React from 'react';
import {QueryComponent, QueryTableView} from 'modules/QueryController';
import {DialogFactory} from 'modules/Form';
import QueryManager from 'flux/QueryManager';
import Date from 'components/Date';
import Title from 'components/Title';
import Invoice from 'components/Invoice';
import {Price} from 'components/Currency';
import Shipping from 'components/Shipping';
import Status from 'components/OrderStatus';
import Address, {parse} from 'components/Address';
import OrderEdit from 'dialogs/OrderEdit';
import './Orders.css';
import * as keys from './constants';
import PropTypes from 'prop-types';

const kDialogKey = 'dialog';

export default class Orders extends QueryComponent {
  queryForRequest() {
    return QueryManager.queryForOrders();
  }

  handleRowClick = (row) => {
    const {dialogs} = this.state;

    dialogs.showDialog(kDialogKey, {
      header: `Order ${row.invoice}`,
      showHeader: true,
      size: 'large',
      Component: <OrderEdit submitCancel
                            value={row}
                            onSubmit={console.log}/>,
    });

  };

  renderCell = (cell, order) => {
    const address = parse(order[keys.kAddressKey]);
    switch (cell) {
      case keys.kDateAndInvoiceCell:
        return (
            <div className="Orders__item">
              <Invoice value={order[keys.kInvoiceKey]} />
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
      case keys.kInvoiceCell:
        return (
            <div className="Orders__item">
              <Invoice value={order[keys.kInvoiceKey]} />
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
              <Price value={order[keys.kTotalKey]} className="Orders__currency_price"/>
            </div>
        );
      default :
        return <div>--</div>;
    }
  };

  render() {
    const {query, dialogs} = this.state;

    return (
        <div className="Orders">
          <Title>Заказы</Title>
          <QueryTableView allowSelect
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
                          optionsSelect={{
                            onSelect: this.handleRowClick,
                            bgColor: '#fff',
                          }}
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
  objectsPerPage: PropTypes.number,
};
Orders.defaultProps = {
  page: 0,
  objectsPerPage: 12,
};
