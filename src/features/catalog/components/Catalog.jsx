import React from 'react';
import { useParams } from 'react-router-dom';

import s from './Catalog.module.scss';

const Catalog = () => {

    const { name } = useParams();

    React.useEffect(() => {
        console.log(name);
    }, []);

    return (
        <div className={s.catalog}>
            <h1>Catalog</h1>
        </div>
    );
};

export default Catalog;