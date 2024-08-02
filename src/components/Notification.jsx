import React, { useEffect, useState } from 'react';
import '../style/Notification.scss';

const Notification = ({ message, onClose, duration = 5000 }) => {
    const [progress, setProgress] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setProgress(prev => {
                    if (prev < 100) {
                        return prev + 100 / (duration / 100);
                    } else {
                        clearInterval(interval);
                        return prev;
                    }
                });
            }, 100);

            const timer = setTimeout(() => {
                onClose();
            }, duration);

            return () => {
                clearTimeout(timer);
                clearInterval(interval);
            };
        }
    }, [isPaused, onClose, duration]);

    const handleMouseEnter = () => {
        setIsHovered(true);
        setIsPaused(true);
        setProgress(0);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setIsPaused(false);
    };

    const opacity = isHovered ? 1 : 1 - (progress / 100);

    return (
        <div className="notification" style={{ opacity }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="notification-content">
                <p>{message}</p>
                <div className="close-button" onClick={onClose}>×</div>
            </div>
            <div className="progress-bar">
                <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    );
};

export default Notification;