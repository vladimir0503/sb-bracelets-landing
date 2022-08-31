import React from 'react';
import medal from '../../../images/medal.svg';

import s from './Medal.module.scss';

const Medal = ({ initTop, initLeft, initRotate }) => {
    const [top, setTop] = React.useState(initTop);
    const [left, setLeft] = React.useState(initLeft);
    const [rotate, setRotate] = React.useState(initRotate);

    const genTranslate = (maxLeft) => {
        setTop(Math.floor(807 - 0.5 + Math.random() * (3263 - 807 + 1)));
        setLeft(Math.floor(0 - 0.5 + Math.random() * (maxLeft - 0 + 1)));
        setRotate(Math.floor(0 - 0.5 + Math.random() * (360 - 0 + 1)));
    };

    const style = {
        top: `${top}px`,
        left: `${left}px`,
        transform: `rotate(${rotate}deg)`
    };

    React.useEffect(() => {
        const width = document.body.clientWidth;
        genTranslate(width);
        const id = setInterval(() => genTranslate(width), 10000);
        return () => clearInterval(id);
    }, []);

    return (
        <img style={style} className={s.medal} src={medal} alt='medal' />
    );
};

export default Medal;