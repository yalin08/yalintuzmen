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






    return (
        <ApiContext.Provider value={{ posts, isLoading }}>
            {children}
        </ApiContext.Provider>

    );
}