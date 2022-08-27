import React from 'react';
import { useSelector } from 'react-redux';
import btn from '../../../images/btn.svg';
import LinkWrapper from '../../../components/common/LinkWrapper/LinkWrapper';
import s from './RequestBtn.module.scss';

const RequestBtn = () => {

    const { isActive } = useSelector(state => state.requestBtn);

    return (
        <LinkWrapper id='formBlock'>
            <img className={`${s.requestBtn} ${isActive && s.active} `} src={btn} alt='btn' />
        </LinkWrapper>
    );
};

export default RequestBtn;