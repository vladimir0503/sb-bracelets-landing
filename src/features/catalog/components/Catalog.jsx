import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Menu from '../components/Menu/Menu';


import s from './Catalog.module.scss';

const Catalog = () => {

    const { catalogName, catalog } = useSelector(state => state.catalog);

    React.useEffect(() => {
        console.log(catalogName);
    }, [catalogName])

    return (
        <div className={s.catalog}>
            <div className={s.catalogContent}>
                <Menu />
                <div className={s.products}>
                    <div className={s.catalogItem}>
                        <img alt='photo' />
                        <p>Артикул</p>
                        <h3>Название изделия</h3>
                        <button>Подробно</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;