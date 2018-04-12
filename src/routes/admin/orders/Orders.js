import React from 'react';
import {QueryComponent, QueryTableView} from 'modules/QueryController';
import QueryManager from 'flux/QueryManager';
import Title from 'components/Title';
import Sale from 'components/Sale';
import Date from 'components/Date';
import Shipping from 'components/Shipping';
import {Price} from 'components/Currency';
import Status from 'components/OrderStatus';
import Address, {parse} from 'components/Address';
import './Orders.css';
import * as keys from './constants';
import PropTypes from 'prop-types';

export default class Orders extends QueryComponent {
  queryForRequest() {
    return QueryManager.queryForOrders();
  }

  handleRowClick = (row) => {
    console.log(row);
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
    const {query} = this.state;

    return (
        <div className="Orders">
          <Title>Заказы</Title>
          <QueryTableView
              allowSelect
              hideSelectColumn
              keyField={'id'}
              headerStyle={{color: '#000', fontWeight: 400, fontSize: 14}}
              headers={keys.headers}
              optionsSelect={{
                onSelect: this.handleRowClick,
                bgColor: '#fff',
              }}
              emptyView={() => 'Нет данных'}
              query={query}
              renderCell={this.renderCell}
          />
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
