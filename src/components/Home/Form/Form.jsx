import React from 'react';
import Loader from '../../common/Loader/Loader';
import { useDispatch } from 'react-redux/es/exports';
import { toggle } from '../../../features/requestBtn/requestBtnSlice';
import { useInView } from 'react-intersection-observer';
import api from '../../../api/api';

import s from './Form.module.scss';

const Form = () => {
    const [name, setName] = React.useState('');
    const [tel, setTel] = React.useState('');
    const [mail, setMail] = React.useState('');
    const [sending, setSending] = React.useState(false);

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

    const handleSubmit = async e => {
        e.preventDefault();
        setSending(true);

        const data = {
            name,
            tel,
            mail
        };

        try {
            await api.fetchRequest(data);
            alert('Заявка отправленна, ждите');
            setName('');
            setTel('');
            setMail('');
        } catch (error) {
            alert('Что то пошло не так(')
        } finally {
            setSending(false);
        };
    };

    return (
        <>
            <div className={s.laser}></div>
            <div className={s.formWrapper}>
                <div id='formBlock' ref={ref} className={s.formContent}>
                    <form onSubmit={handleSubmit}>
                        <input
                            required
                            onChange={e => setName(e.target.value)}
                            type='text'
                            placeholder='Имя'
                            value={name}
                        ></input>
                        <input
                            required
                            onChange={e => setTel(e.target.value)}
                            type='tel'
                            placeholder='8 (999)-999-99-99'
                            value={tel}
                        ></input>
                        <input
                            required
                            onChange={e => setMail(e.target.value)}
                            type='email'
                            placeholder='e-mail'
                            value={mail}></input>
                        <button disabled={sending}>{!sending ? 'ОТПРАВИТЬ' : <Loader />}</button>
                    </form>
                    <div className={s.descrBlock}>
                        <h2>ОСТАВЬТЕ<br></br> ЗАЯВКУ</h2>
                        <p>Оставьте заявку и наш менеджер<br></br> свяжется с Вами в ближайшее время </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Form;