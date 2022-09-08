import React from 'react';
import tel from '../../../images/tel.png';
import whatsapp from '../../../images/whatsapp.png';

import s from './LinkBlock.module.scss';

const LinkBlock = ({ style, activeStyle }) => {

    const [active, setActive] = React.useState(false);

    return (
        <div className={`${s.linkBlock} ${style}`}>
            <p className={`${active ? activeStyle : ''}`}>Написать нам в:</p>
            <a
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
                href="tg://resolve?domain=Vlad_smirnov44"
            >
                <img src={tel} alt='telegram' />
            </a>
            <a
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
                href="https://wa.me/+79037652683"
                target='blank'
            >
                <img src={whatsapp} alt='whatsapp' />
            </a>
        </div>
    );
};

export default LinkBlock;