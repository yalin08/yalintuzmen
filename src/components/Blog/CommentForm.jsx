import React, { useContext, useState } from 'react';
import '../../style/Comment.scss';
import { ApiContext } from '../../Context/ApiContext';
import Notification from '../Notification';
import { useTranslation } from 'react-i18next';

const CommentForm = ({ postId }) => {
    const { t } = useTranslation();
    const { postComment, senderIP } = useContext(ApiContext);
    const [sender, setSender] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [notification, setNotification] = useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault();
        var ip = await senderIP();
        ip = ip.data.ip;
        console.log(ip);

        const commentData = {
            sender,
            senderIp: ip,
            title,
            message,
            postId
        };

        await postComment(commentData);

        setSender('');
        setTitle('');
        setMessage('');

        setNotification(t('commentForm.commentSubmitted'));
    };

    const senderLimit = 50;
    const titleLimit = 50;
    const messageLimit = 300;

    const senderWarning = sender.length > senderLimit - 10 ? `(${sender.length}/${senderLimit})` : '';
    const titleWarning = title.length > titleLimit - 10 ? `(${title.length}/${titleLimit})` : '';
    const messageWarning = message.length > messageLimit - 50 ? `(${message.length}/${messageLimit})` : '';


    const closeNotification = () => {
        setNotification(null);
    };


    return (
        <div className="comment-form">
            <h2>{t('commentForm.leaveComment')}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="sender">
                        {t('commentForm.name')}
                    </label>
                    <input
                        type="text"
                        id="sender"
                        value={sender}
                        onChange={(e) => setSender(e.target.value.slice(0, senderLimit))}
                        maxLength={senderLimit}
                        required
                    />
                    {senderWarning && <span className="warning">{senderWarning}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="title">
                        {t('commentForm.title')}
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value.slice(0, titleLimit))}
                        maxLength={titleLimit}
                        required
                    />
                    {titleWarning && <span className="warning">{titleWarning}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="message">
                        {t('commentForm.message')}
                    </label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value.slice(0, messageLimit))}
                        maxLength={messageLimit}
                        required
                    />
                    {message.length > 250 && messageWarning && <span className="warning">{messageWarning}</span>}
                </div>
                <button type="submit">{t('commentForm.submit')}</button>
            </form>
            {notification && (
                <Notification message={notification} onClose={closeNotification} />
            )}
        </div>
    );
};

export default CommentForm;
