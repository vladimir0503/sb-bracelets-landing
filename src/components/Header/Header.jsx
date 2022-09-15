import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import logoSmall from '../../images/logo-small.svg'
import TelBlock from '../common/TelBlock/TelBlock';
import LinkBlock from '../common/LinkBlock/LinkBlock';

import s from './Header.module.scss';

const Header = () => {

    return (
        <header>
            <div className={s.headerContent}>
                <Link to='/'>
                    <img src={logo} alt='logo' />
                </Link>
                <p className={s.schedule}>Режим работы<br></br>
                    пн-сб<br></br>
                    10:00 - 20:00</p>
                <TelBlock />
                <LinkBlock style={s.linksStyle} activeStyle={s.active} />
            </div>
        </header>
    );
};

export default Header;