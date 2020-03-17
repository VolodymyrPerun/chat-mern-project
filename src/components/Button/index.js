import React from 'react';
import {Button as BaseButton} from "antd";
import "./Button.scss";

const Button = (props) => {
    return (
        <BaseButton className="button" {...props}/>
    );
};

export default Button;

