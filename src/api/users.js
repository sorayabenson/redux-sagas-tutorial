import axios from 'axios';

export const getUsers = () => {
    try {
        return axios.get('/users', {
            params: {
                limit: 1000
            }
        })
    } catch (error) {
        
    }
}

export const createUser = ({ firstName, lastName }) => {
    try {
        return axios.post('/users', {
            firstName,
            lastName
        })
    } catch (error) {
        
    }
}