import React from 'react';
import { Link } from 'react-scroll';

const LinkWrapper = ({ id, children }) => {
    return (
        <Link
            to={id}
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
        >
            {children}
        </Link>
    );
};

export default LinkWrapper;