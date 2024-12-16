import React, { useCallback, useState } from "react"
import axios from "axios";
const usePostData = (url) => {
    const [data, setData] = useState({});
    const [error, setError] = useState("")
    const [loading, isLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const postData = useCallback(async (data) => {
        try {
            setError("");
            isLoading(true);
            const response = await axios.post(url, data);
            console.log(response);
            setData(response.data);
            setSuccess(true);
        } catch (error) {
            setSuccess(false);
            if (error.response) {
                console.log(error.response.data.message);
                setError(error.response.data.message || "Server error occurred.")
            } else if (error.request) {
                console.log(error.request)
                setError('No response from server. Please try again later.')
            }
            else {
                console.log(error.message);
                setError('An unexpected error occurred.');
            }
        } finally {
            isLoading(false);
        }
    }, [url])
    return { data, error, loading, success, postData }
}

export default usePostData