/** Axios Configuration */
const AXIOS_CONFIG = {
    baseURL: `http://${process.env.APP_HOST}:${process.env.SERVER_PORT}`,
    headers: { "Content-Type": "application/json" },
    responseType: 'json',
    withCredentials: false
}

export default AXIOS_CONFIG;