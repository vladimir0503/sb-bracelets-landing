import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AnimWrapper from '../../../components/common/AnimWrapper/AnimWrapper';
import Menu from '../components/Menu/Menu';
import CatalogItem from './CatalogItem/CatalogItem';


import s from './Catalog.module.scss';

const Catalog = () => {

    const { catalogName, catalog } = useSelector(state => state.catalog);

    React.useEffect(() => {
        console.log(catalogName);
    }, [catalogName])

    return (
        <AnimWrapper>
            <div className={s.catalog}>
                <div className={s.catalogContent}>
                    <Menu />
                    <div className={s.products}>
                        <CatalogItem />
                        <CatalogItem />
                        <CatalogItem />
                        <CatalogItem />
                        <CatalogItem />
                        <CatalogItem />
                    </div>
                </div>
            </div>
        </AnimWrapper>
    );
};

export default Catalog;