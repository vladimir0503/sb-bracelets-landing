import React from 'react';
import { Link } from 'react-router-dom';
import LinkWrapper from '../common/LinkWrapper/LinkWrapper';
import visa from '../../images/visa.png'
import mc from '../../images/mc.png'
import s from './Footer.module.scss';
import LinkBlock from '../common/LinkBlock/LinkBlock';

const Footer = () => {

    return (
        <div className={s.footer}>
            <div className={s.footerContent}>
                <div className={s.contentItem}>
                    <h3>Полезные ссылки</h3>
                    <LinkWrapper id='delivery'>Доставка</LinkWrapper>
                    <LinkWrapper id='payment'>Оплата</LinkWrapper>
                    <Link to='/confidentiality'>Политика конфиденциальности</Link>
                </div>
                <div className={s.contentItem}>
                    <h3>Оплата</h3>
                    <div className={s.payment}>
                        <img src={visa} alt='visa' />
                        <img src={mc} alt='mc' />
                    </div>
                </div>
                <div className={s.contentItem}>
                    <h3>Контакты</h3>
                    <a href="tel:+79037652683">8(903)765-26-83</a>
                    <LinkBlock style={s.linksColor} activeStyle={s.active} />
                </div>
            </div>
            <div className={s.copyright}>
                <p>(c) 2022 Все прова защищены </p>
                <p>Сделано в Figma</p>
            </div>
        </div>
    );
};

export default Footer;