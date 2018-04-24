export const kIdKey = 'id';
export const kTotalKey = 'total';
export const kStatusKey = 'status';
export const kInvoiceKey = 'invoice';
export const kCommentKey = 'comment';
export const kAddressKey = 'address';
export const kDeliveryKey = 'delivery';
export const kShippingKey = 'shipping';
export const kSubtotalKey = 'subtotal';
export const kDiscountKey = 'discount';
export const kPositionsKey = 'positions';
export const kCreatedAtKey = 'createdAt';
export const kDeliveryPriceKey = 'deliveryPrice';


export const kStatusCell = 'status';
export const kCreatedAtCell = 'createdAt';
export const kDeliveryCell = 'delivery';
export const kAddressCell = 'address';
export const kInvoiceCell = 'invoice';
export const kTotalCell = 'total';
export const kDateAndInvoiceCell = 'dateAndInvoice';

export const headers = [
  {
    dataField: kDateAndInvoiceCell,
    title: 'Заказ',
    width: 200,
  },
  // {
  //   dataField: kInvoiceCell,
  //   title: 'Номер',
  //   width: 200,
  // },
  // {
  //   dataField: kAddressCell,
  //   title: 'Адрес',
  //   width: 200,
  // },
  // {
  //   dataField: kDeliveryCell,
  //   title: 'Доставка',
  //   width: 200,
  // },
  {
    dataField: kTotalCell,
    title: 'Цена',
    width: 150,
  },
  {
    dataField: kStatusCell,
    title: 'Статус',
    width: 150,
  },
];
