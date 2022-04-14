import React from 'react';
import {Navbar} from '../../common'

import './HeaderTop.css'
function HeaderTop() {

    return(
        <section className="topHeader">
            <div className="topHeader-logo">
                    <a href="/" className="header-logo">LOGO</a>
            </div>
            <div className="topHeader-navbar">
                    {<Navbar />}
            </div>
        </section>
    )
}

export default HeaderTop;