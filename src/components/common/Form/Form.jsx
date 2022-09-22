import React from 'react';
import Loader from '../Loader/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { showModal } from '../../../features/modal/modalSlice';
import api from '../../../api/api';

import s from './Form.module.scss';

const Form = ({ toggle }) => {
    const [name, setName] = React.useState('');
    const [tel, setTel] = React.useState('');
    const [mail, setMail] = React.useState('');
    const [sending, setSending] = React.useState(false);

    const { product } = useSelector(state => state.productCard);
    const dispatch = useDispatch();

    const closeForm = () => {
        if (toggle) {
            toggle(false);
        };
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setSending(true);

        const message = product
            ? `<b>Новая заявка!</b>%0A <b>Название товара</b>: ${product.name}%0A <b>Артикул</b>: ${product.article}%0A <b>Имя</b>: ${name}%0A <b>Телефон</b>: ${tel}%0A <b>Почта</b>: ${mail}`
            : `<b>Новая заявка!</b>%0A <b>Имя</b>: ${name}%0A <b>Телефон</b>: ${tel}%0A <b>Почта</b>: ${mail}`;

        try {
            await api.fetchRequest(message);
            dispatch(showModal({
                title: 'СПАСИБО ЗА ЗАЯВКУ!',
                text: 'Наш менеджер скоро свяжется с Вами'
            }));
            setName('');
            setTel('');
            setMail('');
        } catch (error) {
            dispatch(showModal({
                title: 'Что-то пошло не так',
                text: ''
            }));
            console.log(error);
        } finally {
            closeForm();
            setSending(false);
        };
    };

    return (
        <form
            className={s.submitForm}
            onSubmit={handleSubmit}
        >
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
                type='email'
                onChange={e => setMail(e.target.value)}
                placeholder='e-mail'
                value={mail}></input>
            <button disabled={sending}>
                {!sending ? 'ОТПРАВИТЬ' : <Loader />}
            </button>
        </form>
    )
}

export default Form