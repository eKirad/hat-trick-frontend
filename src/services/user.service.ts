import axios, { AxiosResponse } from "axios"

const BASE_URI = `api/v1`
const COLLECTION = `users`

const UserService = {
    fetchUsers: async(limit: number = 2000): Promise<AxiosResponse<any>> => (await axios.get(`/${BASE_URI}/${COLLECTION}`)).data.data
}

export default UserService