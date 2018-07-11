import axios from 'axios'

export const client = axios.create({
    baseURL:'http://localhost/WebApi/',
    headers:{
        'Content-Type': 'application/json'
    }
})