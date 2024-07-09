import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ApiContext } from '../../Context/ApiContext';
import '../../style/PostList.scss';
import LoadingPage from '../LoadingPage';

const BlogHome = () => {
    const { posts, isLoading } = useContext(ApiContext);

    useEffect(() => {
        // Fetch posts here if needed on initial load
    }, []);

    if (!isLoading.read)
        return (
            <>
                <LoadingPage />
            </>
        )



    return (
        <div className="blog-home">
            <h1 className="blog-title">Blog</h1>
            <div className="post-list">
                {posts.map((post) => (
                    <Link to={`/post/${post.id}`} key={post.id} className="post-card">
                        <h2 className="post-title">{post.title}</h2>
                        <p className="post-body">{post.content}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BlogHome;
