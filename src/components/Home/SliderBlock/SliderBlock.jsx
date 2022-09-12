import React from 'react';
import { useNavigate } from 'react-router-dom';

import s from './SliderBlock.module.scss';

const SliderBlock = () => {

    const navigate = useNavigate('');

    const goCatalog = () => {
        navigate('/catalog');
    };

    return (
        <div className={s.sliderBlock}>
            <div className={s.sliderBlockContent}>
                <h1>Реализуйте изделия для себя и<br></br> своих близких с “МАСТЕРСКАЯ<br></br> ГРАВИРОВКИ”</h1>
                <p>Добавте персональную<br></br> гравировку: имена
                    любимых,<br></br> значимые даты, любимый<br></br> футбольный клуб</p>
                <button onClick={goCatalog}>КАТАЛОГ</button>
            </div>
        </div>
    );
};

export default SliderBlock;