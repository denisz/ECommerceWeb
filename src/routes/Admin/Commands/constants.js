export const kActionUpdateCatalog = 'catalog';
export const kActionUpdateAds = 'ads';
export const kActionUpdatePrice = 'price';
export const kActionUpdateCDEKCity = 'CDEKCity';
export const kActionClearExpiredOrders = 'clear';

export const kDescriptionKey = 'description';
export const kActionKey = 'action';
export const kIdKey = 'id';

export const data = [
    ['Обновить каталог из таблицы', kActionUpdateCatalog],
    ['Обновить баннеры из таблицы', kActionUpdateAds],
    ['Отменить просроченные заказы', kActionClearExpiredOrders],
    ['Обновить цены', kActionUpdatePrice],
    ['Обновить города для системы  CDEK', kActionUpdateCDEKCity],
].map((row, idx)=>(
    {
      [kIdKey]: idx,
      [kActionKey]: row[1],
      [kDescriptionKey]: row[0],
    }
));

export const createHeader = (title, dataField, flexGrow = 1) => (
    {
      dataField,
      title,
      style: {
        flexGrow,
      }
    }
);

export const kActionCell = 'action';
export const kDescriptionCell = 'description';

export const headers = [
  createHeader('Описание', kDescriptionCell, 2),
  createHeader('Действие', kActionCell),
];