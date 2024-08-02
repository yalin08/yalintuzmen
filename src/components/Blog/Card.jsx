import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ApiContext } from '../../Context/ApiContext';
import '../../style/Card.scss';
import LoadingPage from '../LoadingPage';
import Comments from './Comments';
import { useTranslation } from 'react-i18next';

const Card = () => {
    const { t } = useTranslation();
    const { id } = useParams(); // Parametre olarak gelen id'yi almak için useParams hook'unu kullanıyoruz
    const { getPostById, isLoading, chageToLocalTime } = useContext(ApiContext);
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const postData = await getPostById(id);
                setPost(postData);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };

        fetchPost();
    }, [id, getPostById]);

    if (!post) {
        return <LoadingPage />;
    }

    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h1 className="card-title">{post.title}</h1>
                </div>
                <div className="card-body">
                    <div className="card-image">
                        <img src={post.imageUrl} alt={post.title} />
                    </div>
                    <div className="card-content">
                        <p>{post.content}</p>
                        <p className="card-date">
                            {t('postedOn')} {chageToLocalTime(post.postedDate)}
                        </p>
                    </div>
                </div>
                <Comments postId={id} />
            </div>
        </div>
    );
};

export default Card;
