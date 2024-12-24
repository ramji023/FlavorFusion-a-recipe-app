import { useState, useEffect } from "react";
import axios from "axios";
import axiosInstance from "../axios.interceptor";
const useFetchData = (url) => {
    const [error, setError] = useState("");
    const [loading, isLoading] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            try {
                setError("")
                isLoading(true)
                const response = await axiosInstance.get(url)
                if (response && response.data) {
                    setData(response.data);
                    console.log(response.data);
                }

            } catch (err) {
                if (err.response) {
                    console.log("response got from server", err.response.data.message)
                    setError(err.response.data.message)
                } else if (err.request) {
                    console.log("request not reached to server", err.request)
                    setError(err.request)
                } else {
                    console.log("something is wrong..", err.message)
                    setError(err.message)
                }
            } finally {
                isLoading(false);
            }
        }
        fetchData();
        // Cleanup function
        return () => {
            controller.abort(); // Cancel the request if the component unmounts
        };
    }
        , [url])

    return { data, error, loading }
}

export default useFetchData