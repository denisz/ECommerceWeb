import React from 'react';
import Image from 'components/Image';
import './Payments.css';

export default () => (
  <div className="Payments">
    <p>
      <Image src="ic_sber.jpg" className="Payments-image"/> Оплата осуществляется посредством банковского перевода на карту Сбербанк.
      <br/>Оплата заказа производится через "сбербанк-онлайн", в кассах отделения Банка иои на терминалах "Сбербанк". После подтверждения заказа мы пришлем вам номер карты для перечисления средств.
    </p>
    <p>В скором времени появится возможсность оплаты заказа непосредственно на сайте банковской картой.</p>
    <div className="text-center clearfix"><Image src="ic_pay_card.jpg" className="Payments-image" /></div>
    <br/>
    <p>Сборка и отправка заказа осуществляется в течение 24 часов после его фактической оплаты.</p>
  </div>
)
