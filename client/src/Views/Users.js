import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Main from '../Components/Main';
import Loading from '../Components/Loading';
import Table from '../Components/Table';
import './styles/Badges.css';
import { toggleLike, comentar } from '../Helpers/post-helpers';


async function cargarUsuarios() {
    const { data } = await Axios.get('/api/news');
    return data;
}

export default function Users({ mostrarError }) {
    const [usuarios, setUsuarios] = useState([]);
    const [cargandoUsuarios, setCargandoUsuarios] = useState(true);
    const [enviandoLike, setEnviandoLike] = useState(false);


    useEffect(() => {
        async function cargarUsuariosIniciales() {
            try {
                const nuevosUsuarios = await cargarUsuarios();
                setUsuarios(nuevosUsuarios);
                setCargandoUsuarios(false);
            } catch (error) {
                mostrarError('Hubo un problema cargando tus noticias.');
                console.log(error);
            }
        }

        cargarUsuariosIniciales();
    }, []);


    async function onSubmitDelete(id) {

        if (enviandoLike) {
            return;
        }

        try {
            setEnviandoLike(true);
            const noticia = await toggleLike(id);
            usuarios.find(x => x.objectID == id).status = 'INACTIVE';
            setEnviandoLike(false);
        } catch (error) {
            setEnviandoLike(false);
            mostrarError('Hubo un problema eliminando la noticia. Intenta de nuevo.');
        }
    }

    if (cargandoUsuarios) {
        return (
            <Main>
                <Loading />
            </Main>
        );
    }
    return (
        <Main >
            <div className="Badges__container">

                <div className="">
                    <Table news={usuarios} onSubmitDelete={onSubmitDelete} mostrarError={mostrarError} />
                    {/* <table className="news_table">
                        <thead></thead>
                        <tbody>
                            {usuarios.map(usuario => (
                                <tr key={usuario.id}>
                                    <td className="title">{(usuario.story_title) ? usuario.story_title : usuario.title} - <span className="author">{usuario.author}</span></td>
                                    <td className="time">{usuario.created_at_i}</td>
                                    <td className="time">{getFormatDate(usuario.created_at)}</td>
                                    <td>
                                        <button onClick={handleClick}>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table> */}
                </div>
                {/* <BadgesList badges={this.state.data} /> */}
            </div>

        </Main>
    );
}