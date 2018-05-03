export const kActionUpdateCatalogKey = 'catalog';
export const kActionUpdateAdsKey = 'ads';
export const kActionClearExpiredOrdersKey = 'clearExpiredOrders';

export const kDescriptionKey = 'description';
export const kActionKey = 'action';
export const kIdKey = 'id';

export const data = [
    ['Обновить каталог из таблицы', kActionUpdateCatalogKey],
    ['Обновить баннеры из таблицы', kActionUpdateAdsKey],
    ['Отменить просроченные заказы', kActionClearExpiredOrdersKey],
].map((row, idx)=>(
    {
      [kIdKey]: idx,
      [kDescriptionKey]: row[0],
      [kActionKey]: row[1],
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