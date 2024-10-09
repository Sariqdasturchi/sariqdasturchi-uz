import React from 'react';

import './login.css'

const Login = () => {
    return (
        <div className='login-container'>
            <div className="login-form">
                <div className="login-title">
                    <h1>Sariqdasturchi platformasiga kirish</h1>
                </div>
                <form>
                    <div>
                        <input type="email" name='email' placeholder='Email' required />

                    </div>
                    <div>
                        <input type="password" name='password' placeholder='Parol' required />
                    </div>
                    <div>
                        <button type='submit'>Yuborish</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
