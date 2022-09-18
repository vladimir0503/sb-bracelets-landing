import React from 'react';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import Form from '../../../../../components/common/Form/Form';

import s from './OrderForm.module.scss';

const OrderForm = ({ toggle }) => {
    return (
        <ModalWrapper toggle={toggle}>
            <div className={s.orderForm}>
                <h1>ЗАКАЗАТЬ ЗВОНОК</h1>
                <p>Оставьте заявку и менеджер свяжется с Вами в ближайшее время</p>
                <Form toggle={toggle} />
            </div>
        </ModalWrapper>
    );
};

export default OrderForm;