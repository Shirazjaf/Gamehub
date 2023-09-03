import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b8d1c2e39b3448c797eefef76302897e'
    }
})