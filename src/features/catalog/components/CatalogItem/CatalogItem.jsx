import React from 'react';
import noImg from '../../../../images/noImg.jpg'

import s from './CatalogItem.module.scss';

const CatalogItem = () => {

    return (
        <div className={s.catalogItem}>
            <img src={noImg} alt='photo' />
            <p>Артикул</p>
            <h3>Название изделия</h3>
            <button>Подробно</button>
        </div>
    );
};

export default CatalogItem;