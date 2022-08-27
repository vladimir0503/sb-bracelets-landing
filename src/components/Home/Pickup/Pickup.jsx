import React from 'react';
import Title from '../../common/Title/Title';
import TelBlock from '../../common/TelBlock/TelBlock';

import s from './Pickup.module.scss';

const Pickup = () => {
    return (
        <div className={s.pickup}>
            <div className={s.pickupContent}>
                <div className={s.addresBlock}>
                    <Title text='САМОВЫВОЗ' />
                    <p>Адрес: г.Клин, Ул. Гагарина, 28,<br></br> офис 5. Часы работы: пн-вс<br></br> - 10:00-19:00</p>
                    <TelBlock />
                </div>
                <iframe
                    className={s.map}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2212.2808993311837!2d36.71915531585221!3d56.324982980710296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5af7b97ad988f%3A0x1c64326b9aa2d052!2z0YPQuy4g0JPQsNCz0LDRgNC40L3QsCwgMjgsINCa0LvQuNC9LCDQnNC-0YHQutC-0LLRgdC60LDRjyDQvtCx0LsuLCAxNDE2MDc!5e0!3m2!1sru!2sru!4v1661288372464!5m2!1sru!2sru"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                >
                </iframe>
            </div>
        </div>
    );
};

export default Pickup;