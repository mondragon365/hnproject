import React, { useState } from 'react';
import Axios from 'axios';
import Main from '../Components/Main';
import Loading from '../Components/Loading';

async function signup(usuario) {
    const data = await Axios.post('/api/user', usuario);
    return data;
}
export default function NewUser({ history, mostrarError }) {
    const [loading, setLoading] = useState(false);
    const [usuario, setUsuario] = useState({
        userId: '',
        name: '',
        lastname: ''
    });
    function handleInputChange(e) {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    }
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setLoading(true);
            await signup(usuario);
            history.push('/users');
        } catch (error) {
            debugger
            mostrarError(error.message);
            setLoading(false);
            console.log(error);
        }
    }
    if (loading) {
        return (
            <Loading />
        );
    }
    return (
        <Main center={true}>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2 className="Form__titulo">New User</h2>
            </div>
            <div className="FormContainer">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label >User Id</label>
                        <input type="text" className="form-control" onChange={handleInputChange} value={usuario.userId} name="userId" />
                    </div>
                    <div className="form-group">
                        <label >Name</label>
                        <input type="text" className="form-control" onChange={handleInputChange} value={usuario.name} name="name" />
                    </div>
                    <div className="form-group">
                        <label >Last Name</label>
                        <input type="text" className="form-control" onChange={handleInputChange} value={usuario.lastname} name="lastname" />
                    </div>
                    <button type="submit" className="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
        </Main>
    );
}