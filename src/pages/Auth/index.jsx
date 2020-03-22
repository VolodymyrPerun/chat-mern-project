import React from 'react';
import {Button, WhiteBlock} from "../../components";
import {Form, Input, Checkbox} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import "./Auth.scss"


const Auth = () => {
    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    return <div className="wrapper">
        <section className="auth">
            <div className="auth__content">
                <div className="auth__top">
                    <h2>Ввійти в аккаунт</h2>
                    <p>Будь ласка, ввійдіть в свій аккаунт</p>
                </div>
                <WhiteBlock>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{remember: true}}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[{required: true, message: 'Будь ласка, введіть свій Логін!'}]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Логін"/>
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{required: true, message: 'Будь ласка, введіть свій Пароль!'}]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="Пароль"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Запам'ятати мене</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                                Забули пароль?
                            </a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Ввійти
                            </Button>
                             {" "} чи <a href="">зареєструватись зараз!</a>
                        </Form.Item>
                    </Form>
                </WhiteBlock>
            </div>
        </section>
    </div>;
};

export default Auth;
