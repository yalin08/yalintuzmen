import React from 'react';
import Select from 'react-select';
import '../style/Footer.scss';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const options = [
        { value: 'en', label: 'English' },
        { value: 'tr', label: 'Türkçe' }
    ];

    const customStyles = {
        control: (provided) => ({
            ...provided,
            backgroundColor: 'transparent',
            borderColor: '#fff',
            color: '#fff'
        }),
        singleValue: (provided) => ({
            ...provided,
            color: '#fff'
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            color: '#fff'
        }),
        indicatorSeparator: (provided) => ({
            ...provided,
            backgroundColor: '#fff'
        }),
        menu: (provided) => ({
            ...provided,
            backgroundColor: '#333'
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? '#555' : '#333',
            color: '#fff'
        })
    };

    return (
        <footer className="footer">
            <div className="footer__content">
                <Select
                    options={options}
                    onChange={(option) => changeLanguage(option.value)}
                    styles={customStyles}
                    defaultValue={options.find(option => option.value === 'en')}
                    menuPlacement="top" // Menü yukarı doğru açılsın
                />
                <p>&copy; 2024 {i18n.t('footer.author')}. {i18n.t('footer.rights')}</p>
            </div>
        </footer>
    );
}

export default Footer;
