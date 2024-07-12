import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
export const ApiContext = createContext();



export const ApiContextProvider = ({ children }) => {

    const [posts, setPosts] = useState([]);
    const [ip, setIp] = useState([]);
    const [isLoading, setIsLoading] = useState({
        readPage: true,
        readAll: true
    });





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



    const postComment = async (postId, sender, title, message) => {

        const comment = {
            sender: sender,
            senderIP: await senderIP(),
            title: title,
            message: message,

            postId: postId
        }

    }


    // postComment(1, "yalin", "selam", "meraba")





    const getPosts = async () => {


        const response = await axios
            .get("https://portfolioblogapi.azurewebsites.net/api/Post/GetAll")
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
        <ApiContext.Provider value={{ getPosts, isLoading, getCommentByPostId, senderIP, setIsLoading, getPostById, getPostsPagination }}>
            {children}
        </ApiContext.Provider>

    );
}