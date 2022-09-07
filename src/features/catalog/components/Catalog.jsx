import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCatalog } from '../catalogSlice';
import LoaderMedium from '../../../components/common/Loader/LoaderMedium/LoaderMedium';
import AnimWrapper from '../../../components/common/AnimWrapper/AnimWrapper';
import Menu from '../components/Menu/Menu';
import CatalogItem from './CatalogItem/CatalogItem';


import s from './Catalog.module.scss';

const Catalog = () => {

    const { catalogName, catalog, isLoading } = useSelector(state => state.catalog);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getCatalog(catalogName));
    }, [catalogName]);

    return (
        <AnimWrapper>
            <div className={s.catalog}>
                <div className={s.catalogContent}>
                    <Menu />
                    <div className={s.products}>
                        {
                            isLoading
                                ? <LoaderMedium />
                                : catalog.length
                                    ? catalog.map((item, i) => (
                                        <CatalogItem key={i} item={{ ...item, catalogName }} />
                                    ))
                                    : <h1 className={s.empty}>ОЙ! В ЭТОЙ КАТЕГОРИИ ПОХОЖЕ<br></br> НИЧЕГО НЕТ</h1>
                        }
                    </div>
                </div>
            </div>
        </AnimWrapper>
    );
};

export default Catalog;