import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
export const ApiContext = createContext();



export const ApiContextProvider = ({ children }) => {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState({
        readPage: true,
        readAll: true
    });



    useEffect(() => {
        setTimeout(() => {

            const getPosts = async () => {
                try {

                    const response = await axios
                        .get("https://portfolioblogapi.azurewebsites.net/api/Post/GetAll")
                        .then((response) => {
                            setPosts(response.data);
                        });
                    setIsLoading((prevIsLoading) => ({ ...prevIsLoading, readAll: true }));
                } catch (error) {
                    console.log(error);
                }


            }
            getPosts();
        }, 300)



    }, [posts]);


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
        <ApiContext.Provider value={{ posts, isLoading, setIsLoading, getPostById, getPostsPagination }}>
            {children}
        </ApiContext.Provider>

    );
}