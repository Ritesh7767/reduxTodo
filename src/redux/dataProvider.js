import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid'

const dataProvider = createSlice({
    name : 'dataProvider',
    initialState : [],
    reducers : {
        ADD_TODO(state, action){
            let obj = {
                id : uuidv4(),
                task : action.payload,
                status : false 
            }
            state.push(obj)
        },
        UPDATE_TODO(state, action){
            state.forEach(ele => {
                if(ele.id == action.payload) ele.status =  !ele.status
            })
        },
        DELETE_TODO(state, action){
            console.log('delete todo')
            return state.filter(ele => ele.id != action.payload)
        }
    }
})

export const {ADD_TODO, UPDATE_TODO, DELETE_TODO} = dataProvider.actions
export default dataProvider.reducer