import React from "react";
import s from './Login.module.css';
import { Field, reduxForm } from 'redux-form';
import { email, maxLength, requiredField } from "../../validators/validators";
import { LoginFormControl } from "../common/FormControls/FormControl";
import { connect } from "react-redux";
import { login } from '../../redux/Auth-reducer';
import { Redirect } from "react-router";
import style from "../common/FormControls/FormControl.module.css";

const maxLength8 = maxLength(8);
const InputForm = LoginFormControl("input");

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>

            <div>
                <Field name={"Email"} validate={[requiredField, email]} label="e-mail" type="email" component={InputForm} />
            </div>
            <div>
                <Field name={"Pass"} validate={[requiredField, maxLength8]} label="password" type="password" component={InputForm} />
            </div>
            <div>
                <Field name={"RememberMe"} type="checkbox" component="input" />remember Me
            </div>
            {props.error &&
                <div className={style.content}>{props.error}</div>
            }
            {props.urlCaptcha &&
                <div>
                    <div>
                        <img src={props.urlCaptcha}></img>
                    </div>
                    <div>
                        <Field name={"captcha"} label="capa" type="text" component={InputForm} />
                    </div>
                </div>
            }
            <div>
                <button type="submit" >LogIn</button>
            </div>

        </form>
    );
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);  

const LoginPage = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.Email, formData.Pass, formData.RememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div className={s.content}>
            <h1>LOGIN</h1>
            <LoginReduxForm urlCaptcha={props.urlCaptcha} onSubmit={onSubmit} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        urlCaptcha: state.auth.urlCaptcha
    }
}

export default connect(mapStateToProps, { login })(LoginPage);
