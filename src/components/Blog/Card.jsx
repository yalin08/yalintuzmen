import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ApiContext } from '../../Context/ApiContext';
import '../../style/Card.scss';
import LoadingPage from '../LoadingPage';

const Card = () => {
    const { id } = useParams(); // Parametre olarak gelen id'yi almak için useParams hook'unu kullanıyoruz
    const { getPostById, isLoading } = useContext(ApiContext);
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
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Card;
