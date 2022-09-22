import React from 'react';
import arrowLeft from '../../../../images/arrowLeft.svg'
import arrowRight from '../../../../images/arrowRight.svg'
import noImg from '../../../../images/noImg.jpg';

import s from './Slider.module.scss';

const Slider = ({ slides, sliderName = 'default' }) => {
    const [count, setCount] = React.useState(0);
    const [btnsInit, setBtnsInit] = React.useState(false);

    const slideRight = () => {
        setCount(count => {
            if (count >= slides.length - 1) {
                return 0;
            } else {
                return count + 1;
            };
        });
    };

    const slideLeft = () => {
        setCount(count => {
            if (count <= 0) {
                return slides.length - 1;
            } else {
                return count - 1;
            };
        });
    };

    React.useEffect(() => {
        const img = document.getElementById(`${count}${sliderName}`);

        if (!img) return;

        img.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
    }, [count]);

    return (

        <div className={s.slider}>
            <div
                className={s.sliderBlock}
                onMouseEnter={() => setBtnsInit(true)}
                onMouseLeave={() => setBtnsInit(false)}
            >
                {slides && slides.map((slide, i) => (
                    <img
                        key={i}
                        className={`${s.slideImg} ${count === i ? s.activeSlide : ''}`}
                        src={slide ? slide : noImg}
                        alt='slide'
                    />
                ))}
                <div className={`${s.btnsBlock} ${btnsInit ? s.active : ''}`}>
                    <button onClick={slideLeft}><img src={arrowLeft} alt='arrow' /></button>
                    <button onClick={slideRight}><img src={arrowRight} alt='arrow' /></button>
                </div>
            </div>
            <div className={s.sliderItems}>
                {slides && slides.map((img, i) => (
                    <img
                        id={`${i}${sliderName}`}
                        onClick={() => setCount(i)}
                        key={i}
                        className={`${s.sliderItem} ${count === i ? s.activeItem : ''}`}
                        src={img ? img : noImg}
                        alt='slide'
                    />
                ))}
            </div>
        </div>
    )
}

export default Slider