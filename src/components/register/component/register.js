import React from 'react';
import {component as NavBar} from '../../../utilities/navbar';
import {component as Expertise} from '../subcomponents/expertise';
import './register.scss';




export default function Register() {

    return (
        <div className="register">
            {/* the navigation bar component */}
            <NavBar />
            {/* the navigation bar component */}

            {/* the section actually showing the mail content */}
            <div className="register__content">

                <div className="register__content__form">
                    <Expertise/>
                </div>
            </div>

        </div>
    )
}

