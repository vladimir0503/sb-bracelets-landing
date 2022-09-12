import React from 'react';
import exitImg from '../../../../../images/exit.svg';
import Slider from '../../Slider/Slider'

import s from './EngravingIdeas.module.scss';

const EngravingIdeas = ({ toggle, slides }) => {

    const exit = () => {
        toggle(false);
    };

    React.useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflowY = 'scroll';
        };

    }, []);

    return (
        <div className={s.engravingIdeas}>
            <button onClick={exit} className={s.exitBtn}><img src={exitImg} alt='exit' /></button>
            <Slider slides={slides} />
        </div>
    );
};

export default EngravingIdeas;