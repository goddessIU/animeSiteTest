import { instance } from "../../ajax/axios"

export const fetchAnimeDetail = async (id: number) => {
    const res = await instance.get(`https://api.jikan.moe/v4/anime/${id}`)

    return res
}