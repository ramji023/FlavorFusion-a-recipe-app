import axios from "axios";

// create an instance of axios
const axiosInstance = axios.create({
    withCredentials: true,   //include cookie in request
})


//create response interceptors for handling refresh token
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 401 &&
            !originalRequest._retry) {
            originalRequest._retry = true; // Prevent infinite loops
            try {
                await axios.post("/api/v1/users/refreshed-token", {}, { withCredentials: true, })
                // Retry the original request with the refreshed token
                return axiosInstance(originalRequest);
            } catch (error) {
                console.error('Token refresh failed, redirecting to login');
                window.location.href = '/login';
            }
        }

        return Promise.reject(error);
    }
)

export default axiosInstance;