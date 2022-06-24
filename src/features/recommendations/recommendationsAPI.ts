import { instance } from "../../ajax/axios"

export const fetchRecommendations = async () => {
    const response = await instance.get('recommendations/anime')
    return response
}
