import React from 'react';
import { Outlet, Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

function HeaderFooter (props) {
    return (
        <div>
            <Header />

            <Outlet />

            <Footer />
        </div>
    )

}

export default HeaderFooter;