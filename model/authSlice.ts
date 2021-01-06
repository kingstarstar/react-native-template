import { createSlice } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

const authSlice = createSlice({
    name:'auth',
    initialState:{
        token:null,
        count:0
    },
    reducers:{
        setToken:(state,action)=>{
            state.token=action.payload
        },
        increment:(state)=>{
             state.count =state.count+1
        }
        
    }
})

export const asyncLogin = (token)=>(dispatch)=>{
    setTimeout(()=>{
        dispatch(setToken(token))
    },2000)
}

export const  { increment,setToken } = authSlice.actions

export default authSlice.reducer