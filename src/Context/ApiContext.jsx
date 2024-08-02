import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
export const ApiContext = createContext();



export const ApiContextProvider = ({ children }) => {

    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState({
        readPage: true,
        readAll: true
    });



    const chageToLocalTime = (utcTime) => {
        {
            const formattedTime = utcTime.split('.')[0] + 'Z';


            const date = new Date(formattedTime);


            const localTime = date.toLocaleString();
            return localTime;
        }
    }


    const senderIP = async () => {

        const response = await axios
            .get("https://api.ipify.org?format=json").then((x) => {
                return x;
            })

        return response;

    }


    const getCommentByPostId = async (postId) => {

        const response = await axios
            .get("https://portfolioblogapi.azurewebsites.net/api/Comment/GetComment?postId=" + postId).then((x) => {
                return x;
            })

        return response;

    }



    const postComment = async (commentData) => {
        try {
            console.log(commentData);
            const response = await axios.post('https://portfolioblogapi.azurewebsites.net/api/CommentRequest/CreateComment', commentData);
            setComments(prevComments => [...prevComments, response.data]);
        } catch (error) {
            console.error("Error creating comment:", error);
        }
    };


    // postComment(1, "yalin", "selam", "meraba")


    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
        timeZone: 'UTC'
    };


    const getPosts = async () => {


        const response = await axios
            .get("https://portfolioblogapi.azurewebsites.net/api/Post/GetCount")
            .then((x) => {
                return x.data;
            });





        setIsLoading((prevIsLoading) => ({ ...prevIsLoading, readAll: true }));
        return response;
    }






    const getPostsPagination = async (page, pageSize) => {
        try {


            const response = await axios.get(`https://portfolioblogapi.azurewebsites.net/api/Post/GetAllPagination?page=${page}&pageSize=${pageSize}`);


            setIsLoading((prevIsLoading) => ({ ...prevIsLoading, readPage: true }));
            return response.data;
        } catch (error) {
            console.log("Error fetching posts:", error);
            throw error;
        }
    };





    const getPostById = async (id) => {
        try {
            const response = await axios.get(`https://portfolioblogapi.azurewebsites.net/api/Post/GetById?id=${id}`);


            return response.data; // Post detayını döndürür
        } catch (error) {
            console.log("Error fetching post by id:", error);
            throw error; // Hata durumunda hatayı yeniden fırlatır
        }
    };




    return (
        <ApiContext.Provider value={{ getPosts, isLoading, getCommentByPostId, senderIP, chageToLocalTime, setIsLoading, getPostById, getPostsPagination, postComment }}>
            {children}
        </ApiContext.Provider>

    );
}