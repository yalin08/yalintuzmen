import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ApiContext } from '../../Context/ApiContext';
import '../../style/PostList.scss';
import LoadingPage from '../LoadingPage';
const BlogHome = () => {
    const { getPosts, getPostsPagination, isLoading, setIsLoading } = useContext(ApiContext);
    const [postsPagination, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(5);
    const pageSize = 5; // Sayfa başına gösterilecek post sayısı
    const location = useLocation();





    useEffect(() => {
        setIsLoading((prev) => ({ ...prev, readAll: false }));
        setIsLoading((prev) => ({ ...prev, readPage: false }));
    }, []);


    useEffect(() => {
        const pathParts = location.pathname.split('/');
        const page = parseInt(pathParts[pathParts.length - 1]) || 1;
        setCurrentPage(page);
    }, [location]);



    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postLength = await getPosts();
                const data = await getPostsPagination(currentPage, pageSize);
                setPosts(data);
                setTotalPages(Math.ceil(postLength / pageSize));
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchPosts();




    }, [currentPage]);




    const chageToLocalTime = (utcTime) => {
        {
            const formattedTime = utcTime.split('.')[0] + 'Z';


            const date = new Date(formattedTime);


            const localTime = date.toLocaleString();
            return localTime;
        }
    }



    return (

        (isLoading.readPage && isLoading.readAll) ?

            (<div className="blog-home">
                <div className="blog-header">
                    <h1 className="blog-title">Blog Posts</h1>
                </div>
                <div className="post-list">
                    {postsPagination.map((post) => (
                        <Link to={`/post/${post.id}`} key={post.id} className="post-card">
                            <div className="post-image">
                                <img src={post.imageUrl} alt={post.title} />
                            </div>
                            <div className="post-details">
                                <div className='text'>
                                    <h2 className="post-title">{post.title}</h2>
                                    <p className="post-excerpt">
                                        {post.content.length > 50 ? `${post.content.slice(0, 50)}...` : post.content}
                                    </p>
                                </div>
                                <p className="post-date">






                                    Posted on {chageToLocalTime(post.postedDate)}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="pagination">
                    <button
                        className="pagination-button"
                        onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <Link
                            key={index + 1}
                            to={`/blog/${index + 1}`}
                            className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
                        >
                            {index + 1}
                        </Link>
                    ))}
                    <button
                        className="pagination-button"
                        onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>) : (<LoadingPage />)


    )



};

export default BlogHome;
