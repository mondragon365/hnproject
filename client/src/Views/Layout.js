import React, { useState } from 'react';
import Nav from '../Components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Error from '../Components/Error';
import News from '../Views/News';

export default () => (
    <>
        <Layout></Layout>
    </>
)

function Layout() {
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
                <Nav />
                <div className="container-fluid">
                    <div className="row">
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                            <Error mensaje={error} esconderError={esconderError} />
                            <LoginRoutes mostrarError={mostrarError} />
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
                path="/"
                render={props => (<News {...props} mostrarError={mostrarError} />)}
            />
        </Switch>
    )
}