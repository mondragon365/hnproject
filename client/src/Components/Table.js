import React, { useState } from 'react';
import './styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


export default function Table({ news, onSubmitDelete, mostrarError }) {
    const [enviandoComentario, setEnviandoComentario] = useState(false);

    function getFormatDate(fecha) {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var dt = new Date(fecha);
        var currentDate = new Date();
        if (dt.getDate() >= currentDate.getDate()) {
            return (dt.getUTCHours() < 13) ? dt.getUTCHours() + ':' + dt.getUTCMinutes() + ' am' : dt.getUTCHours() + ':' + dt.getUTCMinutes() + ' pm';
        }
        if (dt.getDate() < currentDate.getDate()) {
            if (dt.getDate() == currentDate.getDate() - 1) {
                return 'Yesterday';
            }
            return monthNames[dt.getMonth()] + ' ' + dt.getDate();
        }
    }

    async function onSubmit(id) {
        if (enviandoComentario) {
            return;
        }

        try {
            setEnviandoComentario(true);
            await onSubmitDelete(id);
            setEnviandoComentario(false);
        } catch (error) {
            debugger
            setEnviandoComentario(false);
            mostrarError(
                'Hubo un problema eliminando la noticia. Intenta de nuevo.'
            );
        }
    }

    return (
        <table className="news_table">
            <thead></thead>
            <tbody>
                {news.map(function (usuario) {
                    if (usuario.status == 'ACTIVE') {
                        return (<tr key={usuario.id}>
                            <td className="title">{(usuario.story_title) ? usuario.story_title : usuario.title} - <span className="author">{usuario.author}</span></td>
                            <td className="time">{usuario.created_at_i}</td>
                            <td className="time">{getFormatDate(usuario.created_at)}</td>
                            <td>
                                <span onClick={() => onSubmit(usuario.objectID)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </span>
                            </td>
                        </tr>)
                    }
                })}

            </tbody>
        </table>
    );
}