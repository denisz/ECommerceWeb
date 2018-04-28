import localizeOrderStatus, {
  kOrderStatusAwaitingPickup,
  kOrderStatusRefunded,
  kOrderStatusAwaitingFulfillment,
  kOrderStatusAwaitingPayment,
  kOrderStatusAwaitingShipment,
  kOrderStatusDeclined,
  kOrderStatusShipped
} from 'services/localizedOrderStatus';

export const kQueryKey = 'query';
export const kWhereKey = 'where';
export const kDateKey = 'date';
export const kStatusKey = 'status';

export const kAllStatus = '';

export const kWhereNone = '';
export const kWhereDate = 'date';
export const kWherePhone = 'phone';
export const kWhereInvoice = 'invoice';

export const wheres = [
    [kWhereNone, 'Все'],
    [kWhereDate, 'Дата'],
    [kWherePhone, 'Телефон'],
    [kWhereInvoice, 'Номер'],
].map(i => (
    {value: i[0], label: i[1], disabled: false, selected: false}
));

export const statuses = [
  [kAllStatus, 'Все'],
  [kOrderStatusAwaitingPayment, localizeOrderStatus(kOrderStatusAwaitingPayment)],
  [kOrderStatusAwaitingFulfillment, localizeOrderStatus(kOrderStatusAwaitingFulfillment)],
  [kOrderStatusAwaitingPickup, localizeOrderStatus(kOrderStatusAwaitingPickup)],
  [kOrderStatusAwaitingShipment, localizeOrderStatus(kOrderStatusAwaitingShipment)],
  [kOrderStatusShipped, localizeOrderStatus(kOrderStatusShipped)],
  [kOrderStatusRefunded, localizeOrderStatus(kOrderStatusRefunded)],
  [kOrderStatusDeclined, localizeOrderStatus(kOrderStatusDeclined)],
].map(i => (
    {value: i[0], label: i[1], disabled: false, selected: false}
));