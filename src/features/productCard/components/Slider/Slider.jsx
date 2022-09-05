import React from 'react';
import noImg from '../../../../images/noImg.jpg';

import s from './Slider.module.scss';

const Slider = () => {
    return (
        <div className={s.slider}>
            <img className={s.firstSlide} src={noImg} alt='slide' />
            <div className={s.sliderItems}>
                <img className={s.sliderItem} src={noImg} alt='slide' />
                <img className={s.sliderItem} src={noImg} alt='slide' />
                <img className={s.sliderItem} src={noImg} alt='slide' />
                <img className={s.sliderItem} src={noImg} alt='slide' />
                <img className={s.sliderItem} src={noImg} alt='slide' />
            </div>
        </div>
    )
}

export default Slider