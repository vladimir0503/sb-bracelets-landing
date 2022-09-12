import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWorkItems } from '../worksSlice';
import Title from '../../../components/common/Title/Title';

import s from './Works.module.scss';

const Works = () => {

    const { works } = useSelector(state => state.works);
    const disptach = useDispatch();

    const getWorks = () => {
        disptach(getWorkItems())
    };

    React.useEffect(getWorks, []);

    console.log(works);

    return (
        <div className={s.works}>
            <div className={s.worksContent}>
                <Title text='НАШИ РАБОТЫ' />
                <div className={s.worksItems}>
                    {works &&
                        works.map(({ url }, i) => (
                            <img className={s.workItem} key={i} src={url} alt='work' />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Works;