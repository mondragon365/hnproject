import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './styles/Table.css';

export default function Table({ news, onSubmitDelete, mostrarError }) {
    const [borrandoNews, setBorrandoNews] = useState(false);

    function getFormatDate(fecha) {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var dt = new Date(fecha);
        var currentDate = new Date();
        if (dt.getDate() >= currentDate.getDate()) {
            return (dt.getUTCHours() < 13) ? dt.getUTCHours() + ':' + dt.getUTCMinutes() + ' am' : dt.getUTCHours() + ':' + dt.getUTCMinutes() + ' pm';
        }
        if (dt.getDate() < currentDate.getDate()) {
            if (dt.getDate() === currentDate.getDate() - 1) {
                return 'Yesterday';
            }
            return monthNames[dt.getMonth()] + ' ' + dt.getDate();
        }
    }

    async function onSubmit(id) {
        if (borrandoNews) {
            return;
        }

        try {
            setBorrandoNews(true);
            await onSubmitDelete(id);
            setBorrandoNews(false);
        } catch (error) {            
            setBorrandoNews(false);
            mostrarError(
                'Hubo un problema eliminando la noticia. Intenta de nuevo.'
            );
        }
    }

    return (
        <table className="news_table">
            <thead></thead>
            <tbody>
                {news.map(function (item) {
                    if (item.status === 'ACTIVE') {
                        return (<tr key={item.id}>
                            <td className="title">{(item.story_title) ? item.story_title : item.title} - <span className="author">{item.author}</span></td>
                            <td className="time">{getFormatDate(item.created_at)}</td>
                            <td>
                                <span onClick={() => onSubmit(item.objectID)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </span>
                            </td>
                        </tr>)
                    }else{
                        return '';
                    }
                })}

            </tbody>
        </table>
    );
}