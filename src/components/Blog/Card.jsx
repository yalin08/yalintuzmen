import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ApiContext } from '../../Context/ApiContext';
import '../../style/Card.scss';
import LoadingPage from '../LoadingPage';

const Card = () => {
    const { id } = useParams(); // Parametre olarak gelen id'yi almak için useParams hook'unu kullanıyoruz
    const { getPostById, isLoading, getCommentByPostId } = useContext(ApiContext);
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState(null);

    const calculateTimeAgo = (date) => {
        const currentDate = new Date();
        const postedDate = new Date(date);
        const timeDifference = currentDate - postedDate;

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
                return `${roundedValue} ${unit}${roundedValue !== 1 ? 's' : ''} ago`;
            }
        }

        return 'Just now'; // If less than a second ago
    };


    useEffect(() => {
        const fetchComments = async (id) => {
            const com = await getCommentByPostId(id);

            setComments(com.data);


        }

        fetchComments(id);
    }, [])


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
    }, [id]);

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
                        <p className='card-date'>
                            Posted on {new Date(post.postedDate).toLocaleDateString('en-US', {
                                day: 'numeric',
                                month: 'numeric',
                                year: 'numeric',
                                hour: 'numeric',
                                minute: 'numeric'
                            })}
                        </p>
                    </div>
                </div>



                <div className="comment-list">

                    {
                        comments ?
                            (comments.map((comment, index) => (
                                <div key={index} className="comment-card">

                                    <div className='sender-container'>
                                        <div className="comment-sender">{comment.sender}</div>
                                        <div className="comment-date">{calculateTimeAgo(comment.postedDate)}</div>

                                    </div>

                                    <div className='message-container'>
                                        <div className="comment-title">{comment.title}</div>
                                        <div className="comment-message">{comment.message}</div>
                                    </div>

                                </div>
                            ))) :

                            (<div>
                                <h2>
                                    There are no comments,yet.
                                </h2>
                            </div>)


                    }
                </div>
            </div>
        </div>

    );
};

export default Card;
