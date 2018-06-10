import {
  kDeliveryMethodRussiaPostEMC,
  kDeliveryMethodRussiaPostRapid,
  kDeliveryMethodRussiaPostStandard,
  kDeliveryMethodCDEKEMC,
  kDeliveryMethodCDEKRapid,
  kDeliveryMethodCDEKStandard,
  kDeliveryProviderRussiaPost,
  kDeliveryProviderBoxberry,
  kDeliveryProviderCDEK,
  kDeliveryProviderBaikal,
  kDeliveryProviderNRG,
  kDeliveryProviderPEC
} from 'services/localizedDelivery';

export const methodsProps = {
  [kDeliveryMethodRussiaPostStandard] : {
    label: 'Обычный',
    value: kDeliveryMethodRussiaPostStandard,
    image: 'ic_delivery_standard.png',
  },
  [kDeliveryMethodRussiaPostRapid]: {
    label: 'Ускоренный',
    value: kDeliveryMethodRussiaPostRapid,
    image: 'ic_delivery_rapid.png',
  },
  [kDeliveryMethodRussiaPostEMC]: {
    label: 'Курьерский',
    value: kDeliveryMethodRussiaPostEMC,
    image: 'ic_delivery_ems.png',
  },

  [kDeliveryMethodCDEKStandard] : {
    label: 'Обычный',
    value: kDeliveryMethodCDEKStandard,
    image: 'ic_delivery_standard.png',
  },
  [kDeliveryMethodCDEKRapid]: {
    label: 'Ускоренный',
    value: kDeliveryMethodCDEKRapid,
    image: 'ic_delivery_cdek_rapid.jpg',
  },
  [kDeliveryMethodCDEKEMC]: {
    label: 'Курьерский',
    value: kDeliveryMethodCDEKEMC,
    image: 'ic_delivery_cdek_ems.jpg',
  },
};

export const providersProps = {
  [kDeliveryProviderCDEK]: {
    value: kDeliveryProviderCDEK,
    image: 'ic_delivery_cdek.png',
  },
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

export const createMethodsProps = (arr) => arr.filter(i => !!methodsProps[i]).map(i => methodsProps[i]);
export const createProviderProps = (arr) => arr.map( i => providersProps[i]);