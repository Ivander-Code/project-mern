const AXIOS_CONFIG = {
    baseURL: `http://${process.env.HOST}:${process.env.HOST_PORT}`,
    headers: { "Content-Type": "application/json" },
    responseType: 'json',
    withCredentials: false
}

export default AXIOS_CONFIG;