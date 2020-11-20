import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Main from '../Components/Main';
import Loading from '../Components/Loading';
import Table from '../Components/Table';
import { toggleLike } from '../Helpers/news-helpers';
import './styles/News.css';


async function cargarNews() {
    const { data } = await Axios.get('/api/news');
    return data;
}

export default function News({ mostrarError }) {
    const [news, setNews] = useState([]);
    const [cargandoNews, setCargandoNews] = useState(true);
    const [enviandoLike, setEnviandoLike] = useState(false);


    useEffect(() => {
        async function cargarNewsIniciales() {
            try {
                const nuevosNews = await cargarNews();
                setNews(nuevosNews);
                setCargandoNews(false);
            } catch (error) {
                mostrarError('Hubo un problema cargando tus noticias.');
                console.log(error);
            }
        }

        cargarNewsIniciales();
    }, []);


    async function onSubmitDelete(id) {

        if (enviandoLike) {
            return;
        }

        try {
            setEnviandoLike(true);
            await toggleLike(id);
            news.find(x => x.objectID === id).status = 'INACTIVE';
            setEnviandoLike(false);
        } catch (error) {
            setEnviandoLike(false);
            mostrarError('Hubo un problema eliminando la noticia. Intenta de nuevo.');
        }
    }

    if (cargandoNews) {
        return (
            <Main>
                <Loading />
            </Main>
        );
    }
    return (
        <Main >
            <div className="News__container">
                <div className="">
                    <Table news={news} onSubmitDelete={onSubmitDelete} mostrarError={mostrarError} />                    
                </div>
            </div>
        </Main>
    );
}