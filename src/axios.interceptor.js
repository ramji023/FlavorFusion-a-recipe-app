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
        if (error.response?.status === 401) {
            if (originalRequest.url === "/api/v1/users/current-user" && !originalRequest._retry) {
                return Promise.reject(error); // Just reject the promise
            } else if (!originalRequest._retry) {
                originalRequest._retry = true;
                try {
                    await axios.post("/api/v1/users/refreshed-token", {}, { withCredentials: true });
                    return axiosInstance(originalRequest);
                } catch (refreshError) {
                    console.error('Token refresh failed, redirecting to login');
                    window.location.href = '/login'; // Redirect only if refresh fails
                    return Promise.reject(refreshError); // Important: Reject the promise after redirect
                }
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;