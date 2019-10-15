import axios from "axios";


const instance = axios.create({
    baseURL: 'http://localhost:7743/'
})

export const cardsAPI = {
    async getCards () {
        try {
            let res = await instance.get(`cards`)
            return res.data
        } catch (e) {
            console.log(e)
        }
    }

}
