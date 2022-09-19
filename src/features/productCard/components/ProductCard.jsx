import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductCard, getProductCard } from '../productCardSlice';
import LoaderMedium from '../../../components/common/Loader/LoaderMedium/LoaderMedium';
import Slider from './Slider/Slider'
import ProductInfo from './ProductInfo/ProductInfo';
import AnimWrapper from '../../../components/common/AnimWrapper/AnimWrapper';
import Menu from '../../catalog/components/Menu/Menu';

import s from './ProductCard.module.scss';

const ProductCard = () => {

    const { name, id } = useParams();
    const { product, isLoading } = useSelector(state => state.productCard);

    const dispatch = useDispatch();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    React.useEffect(() => {
        dispatch(fetchProductCard(name, id));
        return () => dispatch(getProductCard(null));
    }, [name, id]);

    return (
        <div className={s.productCard}>
            <div className={s.productCardWrapper}>
                <Menu />
                {
                    isLoading
                        ? <div><LoaderMedium /></div>
                        : <AnimWrapper>
                            <div className={s.productCardContent}>
                                <Slider slides={product?.slides} />
                                <ProductInfo info={product} />
                            </div>
                        </AnimWrapper>
                }
            </div>
        </div>
    );
};

export default ProductCard;