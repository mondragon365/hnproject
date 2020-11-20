import React, { useState } from 'react';
import Nav from '../Components/Nav';
import Sidebar from '../Components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Error from '../Components/Error';

import Users from '../Views/Users';
import NewUser from '../Views/NewUser';
import Login from '../Views/Login';

import { UsuarioProvider, useUsuario } from '../Context/usuario-context';

export default () => (
    <UsuarioProvider>
        <Layout></Layout>
    </UsuarioProvider>
)

function Layout() {
    const { usuario, login, logout } = useUsuario();
    const [error, setError] = useState(null);

    function mostrarError(mensaje) {
        setError(mensaje);
    }

    function esconderError() {
        setError(null);
    }
    return (
        <>
            <Router>
                <Nav logout={logout} />
                <div className="container-fluid">
                    <div className="row">
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                            <Error mensaje={error} esconderError={esconderError} />
                            <LoginRoutes mostrarError={mostrarError} logout={logout} />
                        </main>
                    </div>
                </div>
            </Router>
        </>
    );
}

function LoginRoutes({ mostrarError }) {
    return (
        <Switch>
            <Route
                default
                path="/users"
                render={props => (<Users {...props} mostrarError={mostrarError} />)}
            />
        </Switch>
    )
}