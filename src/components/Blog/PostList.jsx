import React, { useContext, useEffect } from 'react';
import { ApiContext } from "./ApiContext";
import { useNavigate } from 'react-router-dom';
import LoadingPage from '../LoadingPage';

const PostList = () => {

    const { posts, isLoading } = useContext(ApiContext);
    console.log("isloading=" + isLoading.read);




    return (
        <>
            <LoadingPage />
        </>
    )


    //  if (isLoading.read)
    //   console.log(posts);

    return (
        <div>PostList</div>
    )
}

export default PostList