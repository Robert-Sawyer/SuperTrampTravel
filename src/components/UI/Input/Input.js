import React from 'react';
import classes from './Input.module.css';

const input = (props) => {

    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if (props.invalid && props.touched && props.shouldValidate) {
        inputClasses.push(classes.Invalid);
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={inputClasses.join(" ")}
                {...props.elementConfig}
                onChange={props.changed}
                value={props.value}/>;
            break;
        default:
            inputElement = <input
                className={inputClasses.join(" ")}
                {...props.elementConfig}
                value={props.value}/>
    }

    let validationError = null;
    let validationOfUsername = null;
    let validationOfEmail = null;
    let validationOfPassword = null;

    if (props.invalid && props.touched) {
        validationError = <p className={classes.ValidationError}>Wprowadź poprawne dane</p>
    }

    if (props.invalid && props.touched && props.isEmailCorrect) {
        validationOfEmail = <p className={classes.ValidationError}>Wprowadź poprawny adres e-mail</p>;
        validationError = validationOfEmail;
    }

    if(props.invalid && props.touched && props.isPasswordCorrect) {
        validationOfPassword = <p className={classes.ValidationError}>Hasła nie są identyczne</p>;
        validationError = validationOfPassword;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
            {validationError}
        </div>
    );
};

export default input;