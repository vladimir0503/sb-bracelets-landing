import React from 'react';
import {useNavigate} from 'react-router-dom';
import noImg from '../../../../images/noImg.jpg'
import AnimWrapper from '../../../../components/common/AnimWrapper/AnimWrapper';

import s from './CatalogItem.module.scss';

const CatalogItem = ({ item }) => {

    const navigate = useNavigate();

    const goToCart = id => {
        navigate(`/card/${item.catalogName}/${id}`);
    };

    return (
        <AnimWrapper>
            <div className={s.catalogItem}>
                <img src={!item.slides?.[0] ? noImg : item.slides?.[0]} alt='photo' />
                <p>{item.article}</p>
                <h3>{item.name}</h3>
                <button onClick={() => goToCart(item.id)}>Подробно</button>
            </div>
        </AnimWrapper>
    );
};

export default CatalogItem;