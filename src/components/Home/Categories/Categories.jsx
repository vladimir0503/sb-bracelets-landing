import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCatalog } from '../../../features/catalog/catalogSlice';
import s from './Categories.module.scss';

const Categories = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { catalog } = useSelector(state => state.catalog);

    const categories = [
        {
            nameRu: 'Браслеты',
            nameEng: 'bracelets',
            img: ''
        },
        {
            nameRu: 'Ручки',
            nameEng: 'pens',
            img: ''
        },
        {
            nameRu: 'Значки',
            nameEng: 'badges',
            img: ''
        },
    ];

    const toCatalog = name => {
        dispatch(getCatalog(name));
        navigate(`/catalog/${name}`);
    };

    return (
        <div className={s.categories}>
            {categories.map(({ nameRu, nameEng }, i) => (
                <div key={i}>
                    <h3>{nameRu}</h3>
                    <button onClick={() => toCatalog(nameEng)}>подробнее</button>
                </div>
            ))}
        </div>
    );
};

export default Categories;