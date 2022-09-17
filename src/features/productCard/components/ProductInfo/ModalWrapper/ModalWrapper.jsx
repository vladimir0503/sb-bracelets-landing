import React from 'react';
import exitImg from '../../../../../images/exit.svg'

import s from './ModalWrapper.module.scss';

const ModalWrapper = ({ toggle, children }) => {

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
            {children}
        </div>
    );
}

export default ModalWrapper;