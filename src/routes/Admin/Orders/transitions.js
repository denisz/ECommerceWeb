import React from 'react';
import AwaitingPickup from './AwaitingPickup';
import Orders from 'components/Orders';
import QueryManager from 'flux/QueryManager';
import {
  kOrderStatusAwaitingFulfillment,
  kOrderStatusAwaitingPayment,
  kOrderStatusAwaitingPickup,
  kOrderStatusAwaitingShipment,
  kOrderStatusDeclined,
  kOrderStatusRefunded,
  kOrderStatusShipped,
} from 'services/localizedOrderStatus';

export default [
  {
    //Ожидают оплаты
    key: kOrderStatusAwaitingPayment,
    title: 'Ждут оплаты',
    async form() {
      return props => <Orders {...props}
                              query={QueryManager.queryForOrders(
                                  kOrderStatusAwaitingPayment)}/>;
    },
  },
  {
    //Оплаченный заказ ждем результатов
    key: kOrderStatusAwaitingFulfillment,
    title: 'Ждут отправки',
    async form() {
      return props => <Orders {...props}
                              query={QueryManager.queryForOrders(
                                  kOrderStatusAwaitingFulfillment)}/>;
    },
  },
  {
    //Сформированные
    key: kOrderStatusAwaitingPickup,
    title: 'Сформированные',
    async form() {
      return props => <AwaitingPickup {...props}/>;
    },
  },
  {
    //Отправленные
    key: kOrderStatusAwaitingShipment,
    title: 'Отправленные',
    async form() {
      return props => <Orders {...props}
                              query={QueryManager.queryForOrders(
                                  kOrderStatusAwaitingShipment)}/>;
    },
  },
  {
    //Полученные
    key: kOrderStatusShipped,
    title: 'Завершенные',
    async form() {
      return props => <Orders {...props}
                              query={QueryManager.queryForOrders(
                                  kOrderStatusShipped)}/>;
    },
  },
  {
    //Отмененные
    key: kOrderStatusDeclined,
    title: 'Отклоненные',
    async form() {
      return props => <Orders {...props}
                              query={QueryManager.queryForOrders(
                                  kOrderStatusDeclined)}/>;
    },
  },
  {
    //Возврат
    key: kOrderStatusRefunded,
    title: 'Возврат',
    async form() {
      return props => <Orders {...props}
                              query={QueryManager.queryForOrders(
                                  kOrderStatusRefunded)}/>;
    },
  },
];