import React, { useEffect, useState, useContext } from 'react';
import { ApiContext } from '../../Context/ApiContext';
import CommentForm from './CommentForm';
import { useTranslation } from 'react-i18next';
import '../../style/Comments.scss';
const Comments = ({ postId }) => {
    const { t } = useTranslation();
    const { getCommentByPostId } = useContext(ApiContext);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchComments = async (id) => {
            const com = await getCommentByPostId(id);
            setComments(com.data);
        };

        fetchComments(postId);
    }, [postId, getCommentByPostId]);

    const calculateTimeAgo = (date) => {
        const now = new Date();
        const year = now.getUTCFullYear();
        const month = String(now.getUTCMonth() + 1).padStart(2, '0');
        const day = String(now.getUTCDate()).padStart(2, '0');
        const hours = String(now.getUTCHours()).padStart(2, '0');
        const minutes = String(now.getUTCMinutes()).padStart(2, '0');
        const seconds = String(now.getUTCSeconds()).padStart(2, '0');

        const nowUtc = new Date(`${year}-${month}-${day}T${hours}:${minutes}:${seconds}`);

        const postedDate = new Date(date);
        const timeDifference = nowUtc - postedDate;

        const intervals = {
            year: timeDifference / (1000 * 60 * 60 * 24 * 365),
            month: timeDifference / (1000 * 60 * 60 * 24 * 30),
            day: timeDifference / (1000 * 60 * 60 * 24),
            hour: timeDifference / (1000 * 60 * 60),
            minute: timeDifference / (1000 * 60),
            second: timeDifference / 1000
        };

        for (const [unit, value] of Object.entries(intervals)) {
            if (value >= 1) {
                const roundedValue = Math.floor(value);
                return `${roundedValue} ${t(`time.${unit}`)} ${t('timeAgo')}`;
            }
        }

        return t('justNow'); // If less than a second ago
    };

    return (
        <div className="comment-list">
            {comments.length > 0 ? (
                comments.map((comment, index) => (
                    <div key={index} className="comment-card">
                        <div className="sender-container">
                            <div className="comment-sender">{comment.sender}</div>
                            <div className="comment-date">{calculateTimeAgo(comment.postedDate)}</div>
                        </div>
                        <div className="message-container">
                            <div className="comment-title">{comment.title}</div>
                            <div className="comment-message">{comment.message}</div>
                        </div>
                    </div>
                ))
            ) : (
                <div>
                    <h2>{t('noComments')}</h2>
                </div>
            )}
            <CommentForm postId={postId} />
        </div>
    );
};

export default Comments;
