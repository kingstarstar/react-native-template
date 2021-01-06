import { configureStore } from '@reduxjs/toolkit'
import reducers from './reducers'
import { useDispatch } from 'react-redux'
import { storeToken, getStoreToken } from '../storage/storage'
import { setToken } from './authSlice'
const store = configureStore({
    reducer:reducers
})
   
getStoreToken().then(res=>{
    store.dispatch(setToken(res))
})

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>() // Export a hook that can be reused to resolve types
export default store