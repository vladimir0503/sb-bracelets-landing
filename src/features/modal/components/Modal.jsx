import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { hideModal } from '../modalSlice';

import s from './Modal.module.scss';

const Modal = () => {

    const { isActive, message } = useSelector(state => state.modal);
    const dispatch = useDispatch();

    React.useEffect(() => {
        if (isActive) document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflowY = 'scroll';
        };

    }, [isActive]);

    return (
        <>
            {
                isActive
                && <div className={`${s.modalWrapper} ${isActive && s.active}`}>
                    <div className={s.modalBlock}>
                        <h2>{message}</h2>
                        <button onClick={() => dispatch(hideModal())}>ОК</button>
                    </div>
                </div>
            }
        </>
    );
};

export default Modal;