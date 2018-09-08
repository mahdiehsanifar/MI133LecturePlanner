import { store } from '../data/store';
export const isAuthenticated = () => {
    const token = store.getState().profile.token
    return (token === undefined || token === '') ? false : true    
}