export const kIDKey = 'id';
export const kProviderKey = 'provider';
export const kCreatedAtKey = 'createdAt';

export const kBatchCell = 'batch';
export const kProviderCell = 'provider';

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
  createHeader('Партия', kBatchCell, 2),
  createHeader('Провайдер', kProviderCell),
];