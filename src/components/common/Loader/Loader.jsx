import React from 'react';

import s from './Loader.module.scss';

const Loader = () => {
    return (
        <div class={s.ldsEllipsis}><div></div><div></div><div></div><div></div></div>
    );
};

export default Loader;