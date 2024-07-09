import React, { useEffect } from 'react';
import '../style/Loading.scss';

const LoadingPage = (element) => {

    useEffect(() => {
        setTimeout(() => {

        },);
    });
    return (
        <div className="loading">
            <div className="loader"></div>
            <div className="loader-1"></div>
        </div>
    );
};

export default LoadingPage;
