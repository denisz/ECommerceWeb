import React from 'react';
import Orders from 'components/Orders';
import QueryManager from 'flux/QueryManager';
import {
  kOrderStatusAwaitingFulfillment,
  kOrderStatusAwaitingPayment,
  kOrderStatusAwaitingShipment,
  kOrderStatusDeclined,
  kOrderStatusAwaitingPickup,
  kOrderStatusRefunded,
  kOrderStatusShipped,
} from 'services/localizedOrderStatus';

export default [
  {
    //Ожидают оплаты
    key: kOrderStatusAwaitingPayment,
    title: 'Ждут оплаты',
    async form() {
      return props => <Orders {...props} query={QueryManager.queryForOrders(kOrderStatusAwaitingPayment)} />;
    },
  },
  {
    //Оплаченный заказ ждем результатов
    key: kOrderStatusAwaitingFulfillment,
    title: 'Ждут отправки',
    async form() {
      return props => <Orders {...props} query={QueryManager.queryForOrders(kOrderStatusAwaitingFulfillment)} />;
    },
  },
  {
    //Сформированные
    key: kOrderStatusAwaitingPickup,
    title: 'Сформирован',
    async form() {
      return props => <Orders {...props} query={QueryManager.queryForOrders(kOrderStatusAwaitingPickup)} />;
    },
  },
  {
    //Отправленные
    key: kOrderStatusAwaitingShipment,
    title: 'Отправлен',
    async form() {
      return props => <Orders {...props} query={QueryManager.queryForOrders(kOrderStatusAwaitingShipment)} />;
    },
  },
  {
    //Полученные
    key: kOrderStatusShipped,
    title: 'Завершен',
    async form() {
      return props => <Orders {...props} query={QueryManager.queryForOrders(kOrderStatusShipped)} />;
    },
  },
  {
    //Отмененные
    key: kOrderStatusDeclined,
    title: 'Отменен',
    async form() {
      return props => <Orders {...props} query={QueryManager.queryForOrders(kOrderStatusDeclined)} />;
    },
  },
  {
    //Возврат
    key: kOrderStatusRefunded,
    title: 'Возврат',
    async form() {
      return props => <Orders {...props} query={QueryManager.queryForOrders(kOrderStatusRefunded)} />;
    },
  },
]