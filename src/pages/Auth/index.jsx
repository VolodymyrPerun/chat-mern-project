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
                            hasFeedback
                            name="username"
                            rules={[{
                                required: true,
                                validateStatus: "success",
                                message: 'Будь ласка, введіть свій Логін!'
                            }]}
                        >
                            <Input
                                prefix={<UserOutlined className="site-form-item-icon"/>}
                                placeholder="Логін"
                                size="large"
                            />
                        </Form.Item>
                        <Form.Item
                            hasFeedback
                            name="password"
                            rules={[{
                                required: true,
                                validateStatus: "success",
                                message: 'Будь ласка, введіть свій Пароль!'
                            }]}
                        >
                            <Input label="Success"
                                   prefix={<LockOutlined className="site-form-item-icon"/>}
                                   type="password"
                                   placeholder="Пароль"
                                   size="large"
                                   validateStatus="success"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" size="large" htmlType="submit">
                                Ввійти в аккаунт
                            </Button>
                        </Form.Item>
                            <a className="auth__register-link" href="#">Зареєструватись!</a>

                    </Form>
                </WhiteBlock>
            </div>
        </section>
    </div>;
};

export default Auth;
