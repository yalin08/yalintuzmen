import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ApiContext } from '../../Context/ApiContext';
import '../../style/Card.scss';
import LoadingPage from '../LoadingPage';
import Comments from './Comments';
import { useTranslation } from 'react-i18next';

const Card = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const { getPostById, getCommentByPostId, chageToLocalTime } = useContext(ApiContext);
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState(null);





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

        const fetchComments = async (id) => {
            const com = await getCommentByPostId(id);
            setComments(com.data);
        };

        fetchComments(id);


    }, [id]);




    if (post && comments) {

        return (
            <div className='post'>
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
                                <pre>{post.content}</pre>
                                <p className="card-date">
                                    {t('postedOn')} {chageToLocalTime(post.postedDate)}
                                </p>
                            </div>
                        </div>
                        <Comments comments={comments} postId={id} />
                    </div>
                </div>
            </div>

        );


    }

    return <LoadingPage />;
};

export default Card;
