import React, { useState } from 'react';

export default function ({ login, mostrarError }) {
    const [emailYPassword, setEmailYPassword] = useState({
        user: '',
        password: ''
    });

    function handleInputChange(e) {
        setEmailYPassword({
            ...emailYPassword,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            await login(emailYPassword.user, emailYPassword.password);
        } catch (error) {
            mostrarError("error.response.data");
            console.log(error);
        }
    }
    return (
        <div id="login">
            <h3 className="text-center text-white pt-5">Login form</h3>
            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center">
                    <div id="login-column" className="col-md-6">
                        <div id="login-box" className="col-md-12">
                            <form onSubmit={handleSubmit}>
                                <h3 className="text-center text-info">Login</h3>
                                <div className="form-group">
                                    <label className="text-info">Username:</label><br />
                                    <input type="text"
                                        name="user"
                                        className="form-control"
                                        onChange={handleInputChange}
                                        value={emailYPassword.user}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="text-info">Password:</label><br />
                                    <input type="text"
                                        name="password"
                                        className="form-control"
                                        onChange={handleInputChange}
                                        value={emailYPassword.password}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox" /></span></label><br />
                                    <input type="submit" name="submit" className="btn btn-info btn-md" value="submit" />
                                </div>
                                <div id="register-link" className="text-right">
                                    <a href="#" className="text-info">Register here</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}