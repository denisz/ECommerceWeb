import Actions from 'flux/AdminActions';

export const kDescriptionKey = 'description';
export const kActionKey = 'action';
export const kIdKey = 'id';

export const data = [
    ['Обновить каталог из таблицы', Actions.updateCatalog],
    ['Обновить баннеры из таблицы', Actions.updateAds],
    ['Отменить просроченные заказы', Actions.clearExpiredOrders],
    ['Обновить цены', Actions.updatePrices],
    ['Обновить города для системы  CDEK', Actions.updateCDEKCity],
    ['Обновить время доставки для почты России', Actions.updateRussiaPostTime],
    ['Обновить таблицы поставок', Actions.updateReceivedReports],
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