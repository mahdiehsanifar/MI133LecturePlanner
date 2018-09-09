import { store } from '../data/store';
import axios from 'axios';
export const isAuthenticated = () => {    
    const token = store.getState().profile.token    
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    return (token === undefined || token === '') ? false : true    
}