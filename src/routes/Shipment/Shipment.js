import React from 'react';
import Image from 'components/Image';
import './Shipment.css';

export default () => (
    <div className="Shipment">
        <p>Сборка и отправка заказа осуществляется в течение 24 часов после его фактической 100% оплаты.</p>
        <h3 className="">Бесплатная доставка</h3>
        <p>
            <Image src="ic_post_middle.jpg" className="Shipment__image"/>
            На все розничные заказы (весом менее 1 кг.) распространяется бесплатная доставка, на выбор; первым классом Почты России, либо доставка в пункты вывоза заказов СДЭК Отправка заказов производится с понедельника по пятницу.
        </p>
        <h3 className="">Экспресс доставка</h3>
        <p>
            <Image src="ic_post_middle.jpg" className="Shipment__image"/>
            Возможна отправка заказа курьерскими службами СДЭК либо Почты России. Стоимость доставки рассчитывается индивидуально при оформлении заказа. Обычно сроки доставки составляют от 2 до 5 дней.
        </p>
        <h3 className="">Доставка больших заказов</h3>
        <p>
          Весом более 1 кг. или подпадающие под оптовые скидки. Отправка заказов осуществляется, с понедельника по четверг, любой транспортной компанией на выбор, Байкал Сервис, ПЭК, Энергия.
        </p>
        <Image src="ic_trans.jpg" className="Shipment__image--fill"/>

        <p>
          Стоимость доставки транспортной компанией рассчитывается индивидуально при отправке и оплачивается покупателем при получении. Перед оплатой заказа вы можете уточнить стоимость доставки у менеджера или на сайте транспортной компании. Обращаем ваше внимание на то, что заказ доставляется только до склада ТК, откуда вы забираете его самостоятельно.
        </p>

        <p>
          Не забывайте при оформлении заказа правильно заполнять все графы - Индекс, регион, город, улица, номер дома и квартира, ФИО получателя. Магазин снимает с себя ответственность за неверно указанные адреса при оформлении заказа, заказа будет отправлен по адресу указанному при оформлении.
        </p>

        <p>Сразу после отправления, на указанный при оформлении заказа электронный ящик отправим ТРЕК для отслеживания перемещения Вашей посылки.</p>
    </div>
);
