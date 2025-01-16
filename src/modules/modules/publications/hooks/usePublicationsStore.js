import { api } from "../../../../api"

export const usePublicationsStore = () => {

    const useGetPublications = async () => {
        try {
            const { data } = await api.get('/api/publication')
            return { ok: true , data}
        } catch (error) {
            console.error(error)
            return { ok: false, data: error.response.data }
        }
    };

    const useGetSearchPublications = async (s) => {
        try {
            const { data } = await api.get(`/api/publication/search?s=${s}`)
            return { ok: true , data}
        } catch (error) {
            console.error(error)
            return { ok: false, data: error.response.data }
        }
    };

    return {
        useGetPublications,
        useGetSearchPublications
    }
}
