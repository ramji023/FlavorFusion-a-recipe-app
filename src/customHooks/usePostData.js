import React, { useCallback, useState } from "react"
import axios from "axios";
const usePostData = (url) => {
    const [data, setData] = useState({});
    const [error, setError] = useState("")
    const [loading, isLoading] = useState(false);
    const postData = useCallback(async (data) => {
        try {
            isLoading(true);
            const response = await axios.post(url, data);
            console.log(response);
            setData(response.data);
            isLoading(false);
        } catch (error) {
            setError(error);
            isLoading(false);
            console.log(error.message);
        }
    }, [url])
    return { data, error, loading, postData }
}

export default usePostData