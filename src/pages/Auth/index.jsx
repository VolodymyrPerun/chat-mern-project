import React from 'react';
import "./Auth.scss"
import {LoginForm, RegisterForm} from "modules";
import {Route} from "react-router-dom"


const Auth = () => (

    <div className="wrapper">
        <section className="auth">
            <div className="auth__content">
                <Route exact path={["/", "/login","/register"]} component={Auth}/>
                <Route path= component={RegisterForm}/>
            </div>
        </section>
    </div>
);

export default Auth;
