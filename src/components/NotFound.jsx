import React from 'react';
import '../style/NotFound.scss';
import sadImage from '../assets/img/sad.gif';
const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className='textbtn'>
                <h1 className="not-found-title">404</h1>
                <p className="not-found-message">Page Not Found</p>
                <a href="/" className="not-found-link">Go Back Home</a>
            </div>

            <div className='image'>
                <img src={sadImage} alt="" />
            </div>
        </div>
    );
}

export default NotFound;
