import axios from './axios'
const getAllUsers = async () => {
    try {
        const promise = await axios.get('/users');
        return promise.data;
    } catch (error) {
        console.error('Error fetching user: ', error);
        throw error;
    }
}
export const UserService = {
    getAllUsers
}