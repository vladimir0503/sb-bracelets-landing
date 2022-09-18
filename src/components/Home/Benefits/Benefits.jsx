import React from 'react';
import truck from '../../../images/truck.svg'
import loupe from '../../../images/loupe.svg'
import laser from '../../../images/laser.svg'

import s from './Benefits.module.scss';

const Benefits = () => {

    return (
        <div className={s.benefits}>
            <div className={s.benefitsContent}>
                <div className={s.benefitsItem}>
                    <img src={truck} alt='truck' />
                    <h3>ДОСТАВКА ПО ВСЕЙ РОССИИ</h3>
                    <p>Доставка по России от 2 дней &nbsp;<br></br>
                        (Почтой России или силами ТК)</p>
                </div>
                <div className={s.benefitsItem}>
                    <img src={loupe} alt='loupe' />
                    <h3>ИНДИВИДУАЛЬНЫЙ ПОДХОД</h3>
                    <p>Наш дизайнер абсолютно бесплатно&nbsp;<br></br> поможет вам
                        подобрать текст или рисунок&nbsp;<br></br>
                        гравировки и подготовит&nbsp;<br></br>
                        макет для согласования.
                    </p>
                </div>
                <div className={s.benefitsItem}>
                    <img src={laser} alt='laser' />
                    <h3>БЫСТРОЕ ИЗГОТОВЛЕНИЕ</h3>
                    <p>Гравировка выполняется в течение 1 дня.&nbsp;<br></br>
                        Посылки&nbsp;<br></br> отправляются 3 раза в неделю&nbsp;<br></br>
                        (понедельник, среда, пятница).
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Benefits;