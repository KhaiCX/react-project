import axios from 'axios'
const API_URL = 'https://dummyjson.com/users'
const getAllUsers = async () => {
    try {
        const promise = await axios.get(API_URL);
        return promise.data;
    } catch (error) {
        console.error('Error fetching user: ', error);
        throw error;
    }
}
export const UserService = {
    getAllUsers
}