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

const postCreateUser = (objectUser: any) => {
    return axios.post('/users/add', objectUser)
}

const updateUser = (objectUser: any) => {
    return axios.put('/users/' + objectUser.id)
}
export const UserService = {
    getAllUsers, postCreateUser, updateUser
}