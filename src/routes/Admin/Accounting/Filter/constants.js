import localizedReport, {
  kReportTypeDelivery, kReportTypeFix, kReportTypeReceiving,
} from 'services/localizedReport';

export const kTypeKey = 'type';
export const kQueryKey = 'query';
export const kWhereKey = 'where';
export const kEndDateKey = 'end_date';
export const kStartDateKey = 'start_date';

export const kWhereNone = '';
export const kWhereSKU = 'sku';
export const kWhereDate = 'date';
export const kWhereRangeDate = 'range_date';

export const kAllTypes = '';

export const wheres = [
    [kWhereNone, 'Все'],
    [kWhereDate, 'Дата'],
    [kWhereRangeDate, 'Диапазон'],
    [kWhereSKU, 'Артикул'],
].map(i => (
    {value: i[0], label: i[1], disabled: false, selected: false}
));

export const types = [
  [kAllTypes, 'Все'],
  [kReportTypeDelivery, localizedReport(kReportTypeDelivery)],
  [kReportTypeReceiving, localizedReport(kReportTypeReceiving)],
  [kReportTypeFix, localizedReport(kReportTypeFix)],
].map(i => (
    {value: i[0], label: i[1], disabled: false, selected: false}
));