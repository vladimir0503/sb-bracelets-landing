import React from 'react';
import call from '../../../images/call.png';

import s from './TelBlock.module.scss';

const TelBlock = () => {
    return (
        <div className={s.telBlock}>
            <img src={call} alt='call' />
            <a href="tel:+79037652683">8(903)765-26-83</a>
        </div>
    );
};

export default TelBlock;