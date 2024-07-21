import React, { useContext, useEffect, useState } from 'react';
import '../../style/Comment.scss';
import { ApiContext } from '../../Context/ApiContext';


const CommentForm = ({ postId }) => {
    const { postComment, senderIP } = useContext(ApiContext);
    const [sender, setSender] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        var ip = await senderIP();
        ip = ip.data.ip;
        console.log(ip);

        const commentData = {
            sender,
            senderIp: ip, // Bu değeri API'den ya da başka bir yerden alabilirsiniz.
            title,
            message,
            postId
        };

        await postComment(commentData);

        setSender('');
        setTitle('');
        setMessage('');
    };

    return (
        <div className="comment-form">
            <h2>Leave a Comment</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="sender">Name</label>
                    <input
                        type="text"
                        id="sender"
                        value={sender}
                        onChange={(e) => setSender(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CommentForm;