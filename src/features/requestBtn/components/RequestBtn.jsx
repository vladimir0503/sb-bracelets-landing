import React from 'react';
import { useSelector } from 'react-redux';
import btn from '../../../images/btn.svg';
import { HashLink } from 'react-router-hash-link';
import s from './RequestBtn.module.scss';

const RequestBtn = () => {

    const { isActive } = useSelector(state => state.requestBtn);

    return (
        <HashLink smooth to={'/#formBlock'}>
            <img className={`${s.requestBtn} ${isActive && s.active} `} src={btn} alt='btn' />
        </HashLink>
    );
};

export default RequestBtn;