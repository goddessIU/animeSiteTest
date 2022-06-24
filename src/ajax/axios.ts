import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://api.jikan.moe/v4/',
    timeout: 2000
})