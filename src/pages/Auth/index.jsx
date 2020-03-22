import React from 'react';
import {WhiteBlock} from "../../components";
import "./Auth.scss"
import {LoginForm }from "modules";


const Auth = () => (

    <div className="wrapper">
        <section className="auth">
            <div className="auth__content">
                <div className="auth__top">
                    <h2>Ввійти в аккаунт</h2>
                    <p>Будь ласка, ввійдіть в свій аккаунт</p>
                </div>
                    <LoginForm/>
            </div>
        </section>
    </div>
);

export default Auth;
