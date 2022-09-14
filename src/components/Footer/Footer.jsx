import React from 'react';
import { Link } from 'react-router-dom';
import LinkWrapper from '../common/LinkWrapper/LinkWrapper';
import mir from '../../images/mir.png'
import visa from '../../images/visa.png'
import mc from '../../images/mc.png'
import s from './Footer.module.scss';
import LinkBlock from '../common/LinkBlock/LinkBlock';
import TelBlock from '../common/TelBlock/TelBlock';

const Footer = () => {

    return (
        <div className={s.footer}>
            <div className={s.footerContent}>
                <div className={s.contentItem}>
                    <h3>Полезные ссылки</h3>
                    <LinkWrapper id='delivery'><p className={s.navLink}>Доставка</p></LinkWrapper>
                    <LinkWrapper id='payment'><p className={s.navLink}>Оплата</p></LinkWrapper>
                    <Link to='/confidentiality'><p className={s.navLink}>Политика конфиденциальности</p></Link>
                </div>
                <div className={s.contentItem}>
                    <h3>Оплата</h3>
                    <div className={s.payment}>
                        <img src={mir} alt='mir' />
                        <img src={visa} alt='visa' />
                        <img src={mc} alt='mc' />
                    </div>
                </div>
                <div className={s.contentItem}>
                    <h3>Контакты</h3>
                    <div className={s.telWrapper}><TelBlock /></div>
                    <p className={s.address}>Россия,  г.Клин, Ул. Гагарина, 28, офис 5</p>
                    <p className={s.address}>Часы работы: пн-вс - 10:00-19:00</p>
                    <LinkBlock style={s.linksStyle} activeStyle={s.active} />
                </div>
            </div>
            <div className={s.copyright}>
                <p>(c) 2022 Все права защищены </p>
                <p><u>Сделано в Figma</u></p>
            </div>
        </div>
    );
};

export default Footer;