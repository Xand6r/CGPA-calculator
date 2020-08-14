import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

export default function navbar() {
    return (
        <div>
            <div className="navigation">

                <Link className='link' to="/">
                    <div className="navigation__logo">
                            GRA<b>DER</b>
                    </div>
                </Link>

            </div>
        </div>
    )
}
 