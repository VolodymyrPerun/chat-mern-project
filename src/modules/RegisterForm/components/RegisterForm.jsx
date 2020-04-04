import React from 'react';
import {Form, Icon, Input} from "antd";
import {LockOutlined, MailOutlined, UserAddOutlined, InfoCircleTwoTone} from "@ant-design/icons";
import {Button, WhiteBlock} from "components";
import {Link} from "react-router-dom";


export default class RegisterForm extends React.Component {
    render() {
        const success = false;
        const onFinish = values => {
            console.log('Received values of form: ', values);
        };

        return (
            <>
                <div className="auth__top">
                    <h2>Реєстрація</h2>
                    <p>Для входу в чат, вам необхідно зареєструватися</p>
                </div>
                <WhiteBlock>
                    {success ?  <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{remember: true}}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            hasFeedback
                            name="mail"
                            rules={[{
                                required: true,
                                validateStatus: "success",
                                message: 'Будь ласка, введіть свій E-mail!'
                            }]}
                        >
                            <Input
                                prefix={<MailOutlined className="site-form-item-icon"/>}
                                placeholder="E-mail"
                                size="large"
                            />
                        </Form.Item>
                        <Form.Item
                            hasFeedback
                            name="username"
                            rules={[{
                                required: true,
                                validateStatus: "success",
                                message: "Будь ласка, введіть своє ім'я!"
                            }]}
                        >
                            <Input label="Success"
                                   prefix={<UserAddOutlined className="site-form-item-icon"/>}
                                   type="username"
                                   placeholder="Ваше ім'я"
                                   size="large"
                                   validateStatus="success"
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
                        <Form.Item
                            hasFeedback
                            name="password"
                            rules={[{
                                required: true,
                                validateStatus: "success",
                                message: 'Будь ласка, повторіть свій Пароль!'
                            }]}
                        >
                            <Input label="Success"
                                   prefix={<LockOutlined className="site-form-item-icon"/>}
                                   type="password"
                                   placeholder="Повторіть пароль"
                                   size="large"
                                   validateStatus="success"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" size="large" htmlType="submit">
                                Зареєструватись
                            </Button>
                        </Form.Item>
                        <Link className="auth__register-link" to="/register">Ввійти в аккаунт</Link>
                    </Form> : (
                        <div className="auth__success-block">
                            <div>
                                <InfoCircleTwoTone />
                            </div>
                            <h2>Підтвердьте свій акаунт</h2>
                            <p>На вашу пошту відправлено лист з посиланням на підтвердження акаунта</p>
                        </div>
                    )}
                </WhiteBlock>
            </>
        )
    }
}

