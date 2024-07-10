import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
export const ApiContext = createContext();



export const ApiContextProvider = ({ children }) => {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState({
        read: false,
        add: false,
        delete: [],
        update: false,
    });


    useEffect(() => {
        const random = Math.random() * 1000;
        setTimeout(() => {

            const getPosts = async () => {
                try {

                    const response = await axios
                        .get("https://portfolioblogapi.azurewebsites.net/api/Post/GetAll")
                        .then((response) => {
                            setPosts(response.data);
                        });

                    setIsLoading((prevIsLoading) => ({ ...prevIsLoading, read: true }));

                } catch (error) {
                    console.log(error);
                }


            }
            getPosts();
        }, 1000 + random)



    }, []);


    const getPostsPagination = async (page, pageSize) => {
        try {

            const response = await axios.get(`https://portfolioblogapi.azurewebsites.net/api/Post/GetAllPagination?page=${page}&pageSize=${pageSize}`);
            return response.data;
        } catch (error) {
            console.log("Error fetching post by id:", error);
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
        <ApiContext.Provider value={{ posts, isLoading, getPostById, getPostsPagination }}>
            {children}
        </ApiContext.Provider>

    );
}