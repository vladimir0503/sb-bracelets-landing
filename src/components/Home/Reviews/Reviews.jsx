import React from 'react';
import Title from '../../common/Title/Title';
import review1 from '../../../images/review1.jpg'
import review2 from '../../../images/review2.jpg'
import review3 from '../../../images/review3.jpg'

import s from './Reviews.module.scss';

const Reviews = () => {
    return (
        <div className={s.reviews}>
            <div className={s.reviewsContent}>
                <Title text='ОТЗЫВЫ КЛИЕНТОВ' />
                <div className={s.reviewsItems}>
                    <img src={review1} alt='review'/>
                    <img src={review2} alt='review'/>
                    <img src={review3} alt='review'/>
                </div>
            </div>
        </div>
    );
};

export default Reviews;