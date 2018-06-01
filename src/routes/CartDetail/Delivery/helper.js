import {
  kDeliveryMethodEMC,
  kDeliveryMethodRapid,
  kDeliveryMethodStandard,
  kDeliveryProviderRussiaPost,
  kDeliveryProviderBoxberry,
  kDeliveryProviderBaikal,
  kDeliveryProviderNRG,
  kDeliveryProviderPEC
} from 'services/localizedDelivery';

export const methodsProps = {
  [kDeliveryMethodStandard] : {
    label: 'Обычный',
    value: kDeliveryMethodStandard,
    image: 'ic_delivery_standard.png',
  },
  [kDeliveryMethodRapid]: {
    label: 'Ускоренный',
    value: kDeliveryMethodRapid,
    image: 'ic_delivery_rapid.png',
  },
  [kDeliveryMethodEMC]: {
    label: 'Курьерский',
    value: kDeliveryMethodEMC,
    image: 'ic_delivery_ems.png',
  },
};

export const providersProps = {
  [kDeliveryProviderPEC]: {
    value: kDeliveryProviderPEC,
    image: 'ic_delivery_russiapost.png',
  },
  [kDeliveryProviderNRG]: {
    value: kDeliveryProviderNRG,
    image: 'ic_delivery_russiapost.png',
  },
  [kDeliveryProviderBaikal]: {
    value: kDeliveryProviderBaikal,
    image: 'ic_delivery_russiapost.png',
  },
  [kDeliveryProviderBoxberry]: {
    value: kDeliveryProviderBoxberry,
    image: 'ic_delivery_boxberry.png',
  },
  [kDeliveryProviderRussiaPost]: {
    value: kDeliveryProviderRussiaPost,
    image: 'ic_delivery_russiapost.png',
  },
};

export const createMethodsProps = (arr) => arr.map(i => methodsProps[i]);
export const createProviderProps = (arr) => arr.map( i => providersProps[i]);