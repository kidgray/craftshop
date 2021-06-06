import React, { useState } from 'react';

import { FormInput } from '../form-input/form-input.component.jsx';
import { CustomButton } from '../custom-button/custom-button.component.jsx';

export const SignIn = () => {
    const [emailAndPassword, setEmailAndPassword] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        event.preventDefault();

        const {name, value} = event.target;
        
        setEmailAndPassword({
            ...emailAndPassword,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setEmailAndPassword({
            email: '',
            password: ''
        });
    };

    return (
        <div className='sign-in'>
            <h2 className='sign-in-header'>I already have an account.</h2>
            <span>Sign in with your email and password</span>
            
            <form className='sign-in-form' onSubmit={handleSubmit}>
                <FormInput 
                    type='text'
                    name='email'
                    label='Email'
                    value={emailAndPassword.email} 
                    handleChange={handleChange} 
                    required 
                />

                <FormInput
                    type='password'
                    name='password'
                    label='Password'
                    value={emailAndPassword.password} 
                    handleChange={handleChange} 
                    required  
                />

                <CustomButton type='submit'> Sign in </CustomButton>
            </form>
        </div>
    );
};