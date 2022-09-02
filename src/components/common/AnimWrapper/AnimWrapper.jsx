import React from 'react';

import s from './AnimWrapper.module.scss';

const AnimWrapper = ({ children }) => (
    <div className={s.animWrapper}>{children}</div>
);

export default AnimWrapper;