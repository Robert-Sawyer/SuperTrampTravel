import React, {Component} from 'react';
import classes from './Login.module.css';
import {Button} from "react-bootstrap";
import Input from "../../../components/UI/Input/Input";
import axios from 'axios';

class Login extends Component {

    state = {
        loginForm: {
            username: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Wprowadź nazwę użytkownika'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Wprowadź hasło'
                },
                value: '',
                validation: {
                    required: true,
                    isCorrect: false
                },
                valid: false,
                touched: false
            }
        }
    }

    checkValidity(value, rules) {
        let isValid = true;

        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        return isValid;
    }

    inputChangedHandler = (event, inputName) => {
        const updatedForm = {
            ...this.state.loginForm,
            [inputName]: {
                ...this.state.loginForm[inputName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.loginForm[inputName].validation),
                touched: true
            }
        }
        this.setState({loginForm: updatedForm});
    }

    loginHandler = (event) => {
        event.preventDefault();

        const loginData = {
            id: null,
            username: this.state.loginForm.username.value,
            email: null,
            password: this.state.loginForm.password.value,
            enabled: 0,
            roles: null
        }

        var bodyFormData = new FormData();

        bodyFormData.set('username', this.state.loginForm.username.value);
        bodyFormData.set('password', this.state.loginForm.password.value,);

        // const formData = new FormData();
        // // formData.append('id', loginData.id);
        // formData.append('username', loginData.username);
        // formData.append('email', loginData.email);
        // formData.append('password', loginData.password);
        // formData.append('enabled', loginData.enabled);
        // formData.append('roles', loginData.roles);

        console.log(loginData);
        console.log("formdata : " + bodyFormData);

        // axios.post("http://10.5.91.132:8080/users/login", loginData)
        //     .then(response => console.log(response))
        //     .then(response => {
        //         const loginStatus = response.data.status;
        //         if (loginStatus === 403) {
        //             console.log("Taki user już istnieje, albo niepoprawne hasło!")
        //         } else if (loginStatus === 200) {
        //             console.log("Udało się zalogować!")
        //         } else {
        //             console.log("Nieoczekiwany błąd!")
        //         }
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })

        // fetch("http://4cda7179.ngrok.io/users/login", {
        //     method: 'POST',
        //     // mode: "no-cors",
        //     headers: {
        //         // 'Access-Control-Allow-Origin': "*",
        //         // 'Access-Control-Allow-Headers': "*",
        //         // 'Cross-Origin-Resource-Policy': 'cross-origin',
        //         'Content-Type': 'multipart/form-data',
        //         'Vary': 'Access-Control-Request-Headers'
        //     },
        //     body: formData
        // })
        //     .then(response => console.log(response))
        //     .then(response => {
        //         const loginStatus = response.data.status;
        //         if (loginStatus === 403) {
        //             console.log("Taki user już istnieje, albo niepoprawne hasło!")
        //         } else if (loginStatus === 200) {
        //             console.log("Udało się zalogować!")
        //         } else {
        //             console.log("Nieoczekiwany błąd!")
        //         }
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })

        axios({
            method: 'post',
            url: 'http://30d194e4.ngrok.io/users/login',
            data: bodyFormData,
            headers: {'Content-Type': 'multipart/form-data' }
        })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    };

    render() {
        const formElementsArray = [];
        for (let key in this.state.loginForm) {
            formElementsArray.push({
                id: key,
                config: this.state.loginForm[key]
            });
        }

        let form = formElementsArray.map(formElement => (
                <Input
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
            )
        );

        return (
            <div className={classes.Login}>
                <form onSubmit={this.loginHandler}>
                    {form}
                    <Button variant="success" onClick={this.loginHandler}>Zaloguj</Button>
                </form>
            </div>
        );
    }

}

export default Login;