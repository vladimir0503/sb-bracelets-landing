import React from 'react';
import Title from '../../common/Title/Title';
import s from './About.module.scss';

const About = () => {
    return (
        <div className={s.about}>
            <div className={s.aboutContent}>
                <div className={s.aboutItem}>
                    <Title text='О КОМПАНИИ' />
                    <p className={s.aboutDesct}>Наша цель – создавать лучшие подарки с гравировкой<br></br>
                        и избавить вас от головной боли «что подарить другу,<br></br>
                        брату, родственнику на День Рождения?».<br></br>
                        Обратившийся к нам вы получите огромную базу с<br></br>
                        выбором готовых макетов. </p>
                    <p className={s.aboutDesct}>Максимальная прозрачность: мы одна из немногих<br></br>
                        мастерских которая готова предоставить подробный<br></br>
                        фотоотчёт вашего готового изделия. Стоимость покупки<br></br>
                        не имеет значения. Заказ на 200 рублей или на 50.000<br></br>
                        одинаково важен для нас. </p>
                </div>
                <div id='delivery' className={s.aboutItem}>
                    <Title text='ДОСТАВКА' />
                    <p className={s.paymentDescr}>Доставка по России от 2 дней<br></br>
                        Почтой России или силами ТК по предоплате - 250 руб.<br></br>
                        Курьерская доставка СДЭК по России (по предоплате) - от 350 руб.*</p>
                </div>
                <div id='payment' className={s.aboutItem}>
                    <Title text='ОПЛАТА' />
                    <p className={s.paymentDescr}>Наличный расчет (Оплата заказа при получении наличными возможна при самовывозе)<br></br>
                        Банковская карта<br></br>
                        *Для товаров с индивидуальной гравировкой мы работаем по предоплате.<br></br>
                        Предоплата вносится после утверждения эскиза гравировки и всех<br></br> деталей заказа и доставки.</p>
                </div>
            </div>
        </div>
    );
};

export default About;