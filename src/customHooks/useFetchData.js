import { useState, useEffect,useCallback } from "react";
import axios from "axios";
import axiosInstance from "../axios.interceptor";
const useFetchData = (url) => {
    const [error, setError] = useState("");
    const [loading, isLoading] = useState(false);
    const [data, setData] = useState([]);

    const fetchData = useCallback(async () => {
        try {
            setError("");
            isLoading(true); // Start loading
            const response = await axiosInstance.get(url);
            if (response && response.data) {
                setData(response.data);  // Update state with fetched data
                console.log(response.data);
            }
        } catch (err) {
            if (err.response) {
                setError(err.response.data.message); // Handle error response
            } else if (err.request) {
                setError("No response received from server.");
            } else {
                setError(err.message);
            }
        } finally {
            isLoading(false); // Stop loading
        }
    }, [url]);

    useEffect(() => {
        const controller = new AbortController();
        fetchData();
        // Cleanup function
        return () => {
            controller.abort(); // Cancel the request if the component unmounts
        };
    } , [url])

    return { data, error, loading, fetchData }
}

export default useFetchData