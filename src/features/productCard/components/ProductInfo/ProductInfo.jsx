import React from 'react';
import arrow from '../../../../images/arrow.svg';

import s from './ProductInfo.module.scss';

const ProductInfo = () => {
    const [infoIndex, setInfoIndex] = React.useState(0);

    const toggleInfo = index => {
        if (index !== infoIndex) {
            setInfoIndex(index);
        } else {
            setInfoIndex(0);
            return;
        };
    };

    return (
        <div className={s.productInfo}>
            {
                infoIndex === 0
                    ? <div className={s.infoBlock}>
                        <h2>НАЗВАНИЕ ТОВАРА</h2>
                        <p>Артикул</p>
                        <p>Текст гравировки согласовывается индивидуально с менеджером</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    : infoIndex === 1
                    ? <div className={s.delivery}>
                        <p>Адрес: г.Клин, Ул. Гагарина, 28, офис 5. Часы работы: пн-вс - 10:00-19:00 
                        Предворительно требется связаться по номеру:<br></br> <a href="tel:+79037652683">8(903)765-26-83</a></p>
                        <ul>
                            <li>Доставка по России от 2 дней </li>
                            <li>России или силами ТК по предоплате - 250 руб</li>
                            <li>Курьерская доставка СДЭК по России (по предоплате) - от 350 руб.*</li>
                        </ul>
                    </div>
                    : <div className={s.payment}>
                        <ul>
                            <li>Наличный расчет (Оплата заказа при получении наличными возможна при самовывозе)</li>
                            <li>Банковская карта</li>
                        </ul>
                        <p>* Для товаров с индивидуальной гравировкой мы работаем по предоплате. 
                        Предоплата вносится после утверждения эскиза гравировки и всех деталей заказа и доставки</p>
                    </div>
            }
            <div className={s.buttonsWrapper}>
                <h2>ЦЕНА ₽</h2>
                <div className={s.buttonsBlock}>
                    <button>ЗАКАЗАТЬ</button>
                    <button>ИДЕИ ГРАВИРОВКИ</button>
                    <button
                        onClick={() => toggleInfo(1)}
                        className={infoIndex === 1 && s.active}
                    >
                        О ДОСТАВКЕ <img src={arrow} alt='arrow' />
                    </button>
                    <button
                        onClick={() => toggleInfo(2)}
                        className={infoIndex === 2 && s.active}
                    >
                        О ОПЛАТЕ <img src={arrow} alt='arrow' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;