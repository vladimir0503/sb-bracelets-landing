import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductCard } from '../productCardSlice';
import Slider from './Slider/Slider'
import ProductInfo from './ProductInfo/ProductInfo';
import noImg from '../../../images/noImg.jpg';
import AnimWrapper from '../../../components/common/AnimWrapper/AnimWrapper';
import Menu from '../../catalog/components/Menu/Menu';

import s from './ProductCard.module.scss';

const ProductCard = () => {

    const { name, id } = useParams();
    const { product, isLoading } = useSelector(state => state.productCard);

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchProductCard(name, id));
    }, [name, id]);

    return (
        <div className={s.productCard}>
            <div className={s.productCardWrapper}>
                <Menu />
                <AnimWrapper>
                    <div className={s.productCardContent}>
                        <Slider />
                        <ProductInfo />
                    </div>
                </AnimWrapper>
            </div>
        </div>
    );
};

export default ProductCard;