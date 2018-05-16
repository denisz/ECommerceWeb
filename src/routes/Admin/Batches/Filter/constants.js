export const kQueryKey = 'query';
export const kWhereKey = 'where';
export const kProviderKey = 'provider';
export const kStartDateKey = 'start_date';
export const kEndDateKey = 'end_date';

export const kWhereNone = '';
export const kWhereDate = 'date';
export const kWhereRangeDate = 'range_date';

export const wheres = [
    [kWhereNone, 'Все'],
    [kWhereDate, 'Дата'],
    [kWhereRangeDate, 'Диапазон'],
].map(i => (
    {value: i[0], label: i[1], disabled: false, selected: false}
));