import React from 'react';
import noImg from '../../../../images/noImg.jpg';
import work1 from '../../../../images/work1.jpg';
import work2 from '../../../../images/work2.jpg';
import work3 from '../../../../images/work3.jpg';
import work4 from '../../../../images/work4.jpg';
import work5 from '../../../../images/work5.jpg';
import work6 from '../../../../images/work6.jpg';

import s from './Slider.module.scss';

const Slider = () => {

    const [count, setCount] = React.useState(0);

    const arrImg = [work1, work2, work3, work4, work5, work6];

    return (
        <div className={s.slider}>
            <div className={s.sliderBlock}>
                {arrImg.map((slide, i) => (
                    <img
                        key={i}
                        className={`${s.slideImg} ${count === i && s.activeSlide}` }
                        src={slide}
                        alt='slide'
                    />
                ))}
            </div>
            <div className={s.sliderItems}>
                {arrImg.map((img, i) => (
                    <img
                        onClick={() => setCount(i)}
                        key={i}
                        className={`${s.sliderItem} ${count === i && s.activeItem}`}
                        src={img}
                        alt='slide'
                    />
                ))}
            </div>
        </div>
    )
}

export default Slider