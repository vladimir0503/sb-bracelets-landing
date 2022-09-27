import React from 'react';
import Medal from '../../common/Medal/Medal';
import medal from '../../../images/medal.svg';
import medal2 from '../../../images/medal2.svg'
import check from '../../../images/check.svg'
import Title from '../../common/Title/Title';
import s from './About.module.scss';

const About = () => {
    return (
        <div className={s.about}>
            {/* <Medal initTop={1442} initLeft={46} initRotate={110} img={medal} />
            <Medal initTop={1261} initLeft={586} initRotate={360} img={medal} />
            <Medal initTop={1838} initLeft={586} initRotate={360} img={medal} />
            <Medal initTop={2100} initLeft={686} initRotate={360} img={medal2} />
            <Medal initTop={2200} initLeft={786} initRotate={360} img={medal2} />
            <Medal initTop={2300} initLeft={486} initRotate={360} img={medal2} /> */}
            <div className={s.aboutContent}>
                <div className={s.aboutItem}>
                    <Title text='О КОМПАНИИ' />
                    <div className={s.textWrapper}>
                        <p className={s.aboutDesct}><span>Наша цель</span> – создавать лучшие подарки с гравировкой
                            и избавить вас от головной боли «что подарить другу,
                            брату, родственнику на День Рождения?».
                            Обратившийся к нам вы получите огромную базу с
                            выбором готовых макетов. </p>
                        <p className={s.aboutDesct}>Максимальная прозрачность: мы одна из немногих
                            мастерских которая готова предоставить подробный
                            фотоотчёт вашего готового изделия. Стоимость покупки
                            не имеет значения. Заказ на <span>200</span> рублей или на <span>50.000</span> одинаково важен для нас. </p>
                    </div>
                </div>
                <div id='delivery' className={s.aboutItem}>
                    <Title text='ДОСТАВКА' />
                    <div className={s.textWrapper}>
                        {/* <p className={s.paymentDescr}>Доставка по России от 2 дней<br></br>
                            Почтой России или силами ТК по предоплате - 250 руб.<br></br>
                            Курьерская доставка СДЭК по России (по предоплате) - от 350 руб.*</p> */}
                        <div className={s.checkBlock}>
                            <img src={check} alt='check'/>
                            <p className={s.paymentDescr}>Доставка по России от 2 дней</p>
                        </div>
                        <div className={s.checkBlock}>
                            <img src={check} alt='check'/>
                            <p className={s.paymentDescr}>Почтой России или силами ТК по предоплате - 250 руб.</p>
                        </div>
                        <div className={s.checkBlock}>
                            <img src={check} alt='check'/>
                            <p className={s.paymentDescr}>Курьерская доставка СДЭК по России (по предоплате) - от 350 руб.*</p>
                        </div>
                    </div>
                </div>
                <div id='payment' className={s.aboutItem}>
                    <Title text='ОПЛАТА' />
                    <div className={s.textWrapper}>
                        <p className={s.paymentDescr}>Наличный расчет (Оплата заказа при получении наличными возможна при самовывозе)</p>
                        <p className={s.paymentDescr}>Банковская карта</p>
                        <p className={s.prepayment}>*Для товаров с индивидуальной гравировкой мы работаем по предоплате.
                            Предоплата вносится после утверждения эскиза гравировки и всех деталей заказа и доставки.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;