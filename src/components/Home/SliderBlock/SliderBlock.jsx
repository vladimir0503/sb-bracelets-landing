import React from 'react';

import s from './SliderBlock.module.scss';

const SliderBlock = () => {
    return (
        <div className={s.sliderBlock}>
            <div className={s.sliderBlockContent}>
                <h1>Реализуйте изделия для себя и<br></br> своих близких</h1>
                <p>Добавте персональную гравировку: имена<br></br>
                    любимых, значимые даты, любимый<br></br> футбольный клуб</p>
                <button>КАТАЛОГ</button>
            </div>
        </div>
    );
};

export default SliderBlock;