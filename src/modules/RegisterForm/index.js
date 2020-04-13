import {withFormik} from 'formik';
import RegisterForm from "./containers/RegisterForm";

export default withFormik({
    // Custom sync validation
    validate: values => {
        let errors = {};
        if (!values.email) {
            errors.email = 'Будь ласка, введіть свій E-Mail!';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                values.email
            )
        ) {
            errors.email = 'Невірна адреса електронної пошти';
        }
        if (!values.username) {
            errors.username = "Будь ласка, введіть своє ім'я!";
        } else if (
            !/^([a-zA-Z0-9.'_-a-z\u0400-\u04FF]){2,10}$/i.test(
                values.username
            )
        ) {
            errors.username = "Ваше ім'я недійсне. Довжина імені повинна містити від 2-х до 10-ти символів. Допустимі лише символи A-Z, a-z, А-Я, а-я,'0-9', '-', '.', ''', '_'.";
        }
        if (!values.password) {
            errors.password = "Введіть пароль"
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(
            values.password
        )) {
            errors.password = "Дуже легенький пароль. Введіть не менше 8-ми латинських символів, обов'язково нижнього та верхнього регістрів, а також цифри."
        }
        if (!values.repeatPassword) {
            errors.repeatPassword = "Повторіть пароль"
        } else if ((!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(
            values.repeatPassword
        )) || values.password !== values.repeatPassword) {
            errors.repeatPassword = "Пароль не співпадає. Будь ласка введіть пароль ще раз."
        }
        return errors;
    },


    handleSubmit: (values, {setSubmitting}) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'RegisterForm', // helps with React DevTools
})(RegisterForm);
