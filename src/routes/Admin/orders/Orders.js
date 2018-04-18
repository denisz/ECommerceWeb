import React from 'react';
import {QueryComponent, QueryTableView} from 'modules/QueryController';
import {DialogFactory} from 'modules/Form';
import QueryManager from 'flux/QueryManager';
import Sale from 'components/Sale';
import Date from 'components/Date';
import Title from 'components/Title';
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
      Component: <OrderEdit value={row}/>,
    });

  };

  renderCell = (cell, order) => {
    switch (cell) {
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
      case keys.kDeliveryCell:
        return (
            <div className="Orders__item">
              <Shipping {...order[keys.kDeliveryKey]}/>
            </div>
        );
      case keys.kAddressCell:
        return (
            <div className="Orders__item">
              <Address {...parse(order[keys.kAddressKey])}/>
            </div>);
      case keys.kTotalCell:
        const discount = order[keys.kDiscountKey];

        return (
            <div className="Orders__item">
              <Price value={order[keys.kTotalKey]}/>
              {
                discount &&
                <span className="d-flex flex-row align-items-center">
                  Cкидка: <Sale {...order[keys.kDiscountKey]}
                                className="Orders__item_sale"/>
                </span>
              }
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
