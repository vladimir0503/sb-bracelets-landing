import React from 'react';
import RequestBtn from '../../features/requestBtn/components/RequestBtn';
import SliderBlock from './SliderBlock/SliderBlock';
import Benefits from './Benefits/Benefits';
import About from './About/About';
import Works from '../../features/works/components/Works';
import Pickup from './Pickup/Pickup';
import Reviews from './Reviews/Reviews';
import Form from './Form/Form';

import s from './Home.module.scss';

const Home = () => {
    return (
        <div className={s.home}>
            <RequestBtn />
            <SliderBlock />
            <Benefits />
            <About />
            <Works />
            <Reviews />
            <Pickup />
            <Form />
        </div>
    );
};

export default Home;