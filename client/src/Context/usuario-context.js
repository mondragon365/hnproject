import React, { useState, useEffect, useMemo } from 'react';
import Axios from 'axios';
import { setToken, deleteToken, getToken } from '../Helpers/auth-helpers';

const UsuarioContext = React.createContext();

export function UsuarioProvider(props) {
    const [usuario, setUsuario] = useState(null);
    const [cargandoUsuario, setCargandoUsuario] = useState(true);

    useEffect(() => {
        async function cargarUsuario() {
            if (!getToken()) {
                setCargandoUsuario(false);
                return;
            }

            try {
                const { data: usuario } = await Axios.get('/api/user/whoiam');
                setUsuario(usuario);
                setCargandoUsuario(false);
            } catch (error) {
                console.log(error);
            }
        }

        cargarUsuario();
    }, []);

    async function login(user, password) {
        const { data } = await Axios.post('/api/user/autenticar', {
            usuario: user,
            contrasena: password
        });
        setUsuario(data);
        setToken(data.token)
    }
    function logout() {
        setUsuario(null);
        deleteToken();
    }
    //const value = { usuario, login, logout };
    const value = useMemo(() => {
        return { usuario, cargandoUsuario, login, logout };
    }, [usuario, cargandoUsuario]);
    return <UsuarioContext.Provider value={value} {...props} />
}
export function useUsuario() {
    const context = React.useContext(UsuarioContext);
    if (!context) {
        throw new Error("useUsuario debe de estar dentro del provedor UsuarioContext");;
    }
    return context;
}