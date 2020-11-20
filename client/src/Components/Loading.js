import React from 'react';

export default function Loading() {
    return (
        <div className="d-flex justify-content-center align-items-center flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 loading">
            < div className="spinner-grow" role="status" >
                <span className="sr-only">Loading...</span>
            </div >
        </div >
    );
}
