import React from 'react';
import '../style/NotFound.scss';
import sadImage from '../assets/img/sad.gif';
import { useTranslation } from 'react-i18next';
const NotFound = () => {
    const { t } = useTranslation();

    return (
        <div className="not-found">
            <div className="not-found-container">
                <div className='textbtn'>
                    <h1 className="not-found-title">404</h1>
                    <p className="not-found-message">{t('NotFound.NotFound')}</p>
                    <a href="/" className="not-found-link">{t('NotFound.GoBack')}</a>
                </div>

                <div className='image'>
                    <img src={sadImage} alt="" />
                </div>
            </div>
        </div>
    );
}

export default NotFound;
