import React from 'react';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import Slider from '../../Slider/Slider';

const EngravingIdeas = ({ toggle, slides }) => {
    return (
        <ModalWrapper toggle={toggle}>
            <Slider slides={slides} />
        </ModalWrapper>
    );
};

export default EngravingIdeas;