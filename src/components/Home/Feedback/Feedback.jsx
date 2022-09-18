import React from 'react';
import Form from '../../common/Form/Form';
import Modal from '../../../features/modal/components/Modal';
import { useDispatch } from 'react-redux/es/exports';
import { toggle } from '../../../features/requestBtn/requestBtnSlice';
import { useInView } from 'react-intersection-observer';

import s from './Feedback.module.scss';

const Feedback = () => {

    const dispatch = useDispatch();

    const changeActiverequestBtn = (inView, entry) => {
        if (inView) {
            dispatch(toggle(false));
        } else if (entry) {
            dispatch(toggle(true));
        }
    };

    const { ref } = useInView({
        onChange: changeActiverequestBtn,
        threshold: 0,
    });

    return (
        <>
            <div className={s.formWrapper}>
                <div id='formBlock' ref={ref} className={s.formContent}>
                    <Form />
                    <div className={s.descrBlock}>
                        <h2>ОСТАВЬТЕ<br></br> ЗАЯВКУ</h2>
                        <p>Оставьте заявку и наш менеджер<br></br> свяжется с Вами в ближайшее время </p>
                    </div>
                </div>
            </div>
            {/* <Modal /> */}
        </>
    );
};

export default Feedback;