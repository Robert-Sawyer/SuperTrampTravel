import React, {Component} from 'react';
import classes from './Registration.css';

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
                    minLength: 6
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
    }

    render() {
        return (
            <div></div>
        );
    }
}

export default Registration;