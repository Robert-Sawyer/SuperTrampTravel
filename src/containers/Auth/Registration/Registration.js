import React, {Component} from 'react';
import classes from './Registration.module.css';
import {Button} from 'react-bootstrap';
import Input from '../../../components/UI/Input/Input';

class Registration extends Component {

    state = {
        registrationForm: {
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
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Wprowadź adres E-Mail'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
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
                    minLength: 8
                },
                valid: false,
                touched: false
            },
            confirmPassword: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Powtórz hasło'
                },
                value: '',
                validation: {
                    required: true,
                    isPasswordEqual: false,
                },
                valid: false,
                touched: false
            }
        }
    };

    componentDidMount() {

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
            ...this.state.registrationForm,
            [inputName]: {
                ...this.state.registrationForm[inputName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.registrationForm[inputName].validation),
                touched: true
            }
        }
        this.setState({registrationForm: updatedForm});
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.registrationForm) {
            formElementsArray.push({
                id: key,
                config: this.state.registrationForm[key]
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
            <div className={classes.Registration}>
                <form>
                    {form}
                    <Button variant="success">Zarejestruj</Button>
                </form>
            </div>
        );
    }
}

export default Registration;