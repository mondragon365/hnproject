import React from 'react';
import Main from './Main';

export default function Error({ mensaje, esconderError }) {
    if (!mensaje) {
        return null;
    }
    return (
        <Main>
            <div className="alert alert-danger" role="alert">
                {mensaje}
                <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={esconderError}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </Main>
    )
}