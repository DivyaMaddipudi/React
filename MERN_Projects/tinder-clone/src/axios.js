import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-clone-backend-md.herokuapp.com/'
})

export default instance;