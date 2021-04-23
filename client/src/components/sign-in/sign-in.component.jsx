import React, { useState } from 'react';

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
            <h2 className='header'>I already have an account.</h2>
            <span>Sign in with your email and password</span>
            
            <form className='sign-in-form' onSubmit={handleSubmit}>
                <input 
                    className='email-input'
                    type='text'
                    name='email'
                    value={emailAndPassword.email} 
                    onChange={handleChange} 
                    required 
                />
                <label>Email</label>

                <input 
                    className='password-input' 
                    type='password'
                    name='password'
                    value={emailAndPassword.password} 
                    onChange={handleChange} 
                    required  
                />
                <label>Password</label>

                <button className='submit-button' type='submit'>Sign in</button>
            </form>
        </div>
    );
};