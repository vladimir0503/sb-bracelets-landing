import React from 'react';
import Title from '../../common/Title/Title';
import work1 from '../../../images/work1.jpg';
import work2 from '../../../images/work2.jpg';
import work3 from '../../../images/work3.jpg';
import work4 from '../../../images/work4.jpg';
import work5 from '../../../images/work5.jpg';
import work6 from '../../../images/work6.jpg';

import s from './Works.module.scss';

const Works = () => {

    const worksImg = [
        {
            src: work1,
            style: { width: '349px', height: '315px' }
        },
        {
            src: work2,
            style: { width: '408px', height: '340px' }
        },
        {
            src: work3,
            style: { width: '292px', height: '340px' }
        },
        {
            src: work4,
            style: { width: '349px', height: '315px' }
        },
        {
            src: work5,
            style: { position: 'relative', top: '47px', width: '402px', height: '268px' }
        },
        {
            src: work6,
            style: { position: 'relative', top: '20px', width: '286px', height: '295px' }
        },
    ];

    return (
        <>
            <div className={s.separator}></div>
            <div className={s.works}>
                <div className={s.worksContent}>
                    <Title text='НАШИ РАБОТЫ' />
                    <div className={s.worksItems}>
                        {/* {new Array(6).fill('').map((_, i) => (
                            <div className={s.workItem} key={i}></div>
                        ))} */}
                        {worksImg.map(({ src, style }, i) => (
                            <img key={i} style={style} src={src} alt='wotrk' />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Works;