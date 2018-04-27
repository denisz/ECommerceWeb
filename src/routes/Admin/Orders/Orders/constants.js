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
export const kClientIPKey = 'clientIP';
export const kPositionsKey = 'positions';
export const kCreatedAtKey = 'createdAt';
export const kDeliveryPriceKey = 'deliveryPrice';


export const kStatusCell = 'status';
export const kCreatedAtCell = 'createdAt';
export const kDeliveryCell = 'delivery';
export const kAddressCell = 'address';
export const kContactsCell = 'contacts';
export const kInvoiceCell = 'invoice';
export const kTotalCell = 'total';
export const kDateAndInvoiceCell = 'dateAndInvoice';


export const createHeader = (title, dataField, flexGrow = 1) => (
    {
      dataField,
      title,
      style: {
        flexGrow,
      }
    }
);

export const headers = [
  createHeader('Заказ', kDateAndInvoiceCell, 2),
  createHeader('Цена', kTotalCell),
];
