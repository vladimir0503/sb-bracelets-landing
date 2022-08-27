import React from 'react';
import s from './Title.module.scss';

const Title = ({ text }) => <h2 className={s.title}>{text}</h2>;

export default Title;