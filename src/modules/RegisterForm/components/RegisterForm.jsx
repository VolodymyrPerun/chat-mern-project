import React from 'react';
import {Form, Input} from "antd";
import {LockOutlined, MailOutlined, UserAddOutlined, InfoCircleTwoTone} from "@ant-design/icons";
import {Button, WhiteBlock} from "components";
import {Link} from "react-router-dom";


const RegisterForm = props => {

    const {
        success = false,
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isValid,
        dirty
    } = props;



    return (
        <>
            <div className="auth__top">
                <h2>Реєстрація</h2>
                <p>Для входу в чат, вам необхідно зареєструватися</p>
            </div>
            <WhiteBlock>
                {!success ? (
                    <Form
                    onSubmit={handleSubmit}
                    className="login-form"
                >
                    {/*---------email--------*/}
                    <Form.Item
                        validateStatus={!touched.email ? "" : errors.email ? "error" : "success"}
                        hasFeedback
                    >
                        <Input
                            prefix={<MailOutlined className="site-form-item-icon"/>}
                            id="email"
                            placeholder="Введіть ваш E-Mail"
                            type="email"
                            size="large"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                                errors.email && touched.email ? (
                                    'text-input error'
                                ) : (
                                    'text-input'
                                )
                            }
                        />
                        {errors.email &&
                        touched.email && (
                            <div className="input-feedback">{errors.email}</div>
                        )}
                    </Form.Item>
                    {/*---------username--------*/}
                    <Form.Item
                        validateStatus={!touched.username ? "" : errors.username ? "error" : "success"}
                        hasFeedback
                    >
                        <Input prefix={<UserAddOutlined className="site-form-item-icon"/>}
                               id="username"
                               type="username"
                               placeholder="Ваше ім'я"
                               size="large"
                               value={values.username}
                               onChange={handleChange}
                               onBlur={handleBlur}
                               className={
                                   errors.username && touched.username ? (
                                       'text-input error'
                                   ) : (
                                       'text-input'
                                   )
                               }
                        />
                        {errors.username &&
                        touched.username && (
                            <div className="input-feedback">{errors.username}</div>
                        )}
                    </Form.Item>
                    {/*---------password--------*/}
                    <Form.Item
                        hasFeedback
                        validateStatus={!touched.password ? "" : errors.password ? "error" : "success"}
                    >
                        <Input prefix={<LockOutlined className="site-form-item-icon"/>}
                               id="password"
                               type="password"
                               placeholder="Пароль"
                               size="large"
                               value={values.password}
                               onChange={handleChange}
                               onBlur={handleBlur}
                               className={
                                   errors.password && touched.password ? (
                                       'text-input error'
                                   ) : (
                                       'text-input'
                                   )
                               }
                        />
                        {errors.password &&
                        touched.password && (
                            <div className="input-feedback">{errors.password}</div>
                        )}
                    </Form.Item>
                    {/*---------password repeat--------*/}
                    <Form.Item
                        hasFeedback
                        validateStatus={!touched.repeatPassword ? "" : errors.repeatPassword ? "error" : "success"}
                    >
                        <Input prefix={<LockOutlined className="site-form-item-icon"/>}
                               id="repeatPassword"
                               type="password"
                               placeholder="Повторіть пароль"
                               size="large"
                               value={values.repeatPassword}
                               onChange={handleChange}
                               onBlur={handleBlur}
                               className={
                                   errors.repeatPassword && touched.repeatPassword ? (
                                       'text-input error'
                                   ) : (
                                       'text-input'
                                   )
                               }
                        />
                        {errors.repeatPassword &&
                        touched.repeatPassword && (
                            <div className="input-feedback">{errors.repeatPassword}</div>
                        )}
                    </Form.Item>

                    {dirty && !isValid && <div className="input-feedback">Заповніть форму повністю!</div>}
                    <Form.Item>
                        <Button onClick={handleSubmit} type="primary" size="large" htmlType="submit">
                            Зареєструватись
                        </Button>
                    </Form.Item>
                    <Link className="auth__register-link" to="/login">Ввійти в аккаунт</Link>
                </Form>) : (
                    <div className="auth__success-block">
                        <div>
                            <InfoCircleTwoTone/>
                        </div>
                        <h2>Підтвердьте свій акаунт</h2>
                        <p>На вашу пошту відправлено лист з посиланням на підтвердження акаунта</p>
                    </div>
                )}
            </WhiteBlock>
        </>
    )
};

export default RegisterForm;


