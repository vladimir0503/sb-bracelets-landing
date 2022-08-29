import React from 'react';
import Title from '../../common/Title/Title';

import s from './Reviews.module.scss';

const Reviews = () => {
    return (
        <div className={s.reviews}>
            <div className={s.reviewsContent}>
                <Title text='ОТЗЫВЫ КЛИЕНТОВ' />
                <div className={s.reviewsItems}>

                </div>
            </div>
        </div>
    );
};

export default Reviews;