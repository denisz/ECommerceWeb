import React from 'react';
import Image from 'components/Image';
import './Shipment.css';

export default () => (
  <div className="Shipment">
    <p>Сборка и отправка заказа осуществляется в течение 24 часов после его фактической оплаты</p>
    <h3 className="display-3">Бесплатная доставка</h3>
    <p>
      <Image src="ic_post_russia.jpg" className="Shipment__image"/> На все розничные заказы распространяется бесплатная доставка первым Почты России.
      <br/> Сроки доставки варьируются от 7 до 12 дней.
    </p>
    <h3 className="display-3">Экспресс доставка</h3>
    <p>
      <Image src="ic_post_middle.jpg" className="Shipment__image"/> Возможна отправка заказа такими службами экспресс доставки, как: EMS.
      <br/> Стоимость - 400 рублей.
      <br/>Обычно сроки доставки составляют от 2 до 5 дней. Бесплатная доставка заказов от суммы 5000 рублей.
    </p>
    <h3 className="display-3">Доставка больших заказов</h3>
    <p>
      <Image src="ic_post_big.jpg" className="Shipment__image"/> Отправка оптовых заказов осуществляется любой транспортной компанией на выбор.
      <br/> Деловые линии, Байкал Сервис, ПЭК, Энергия.
    </p>
  </div>
);
