import { SET_AGE, SET_ID, SET_PASSWORD, SET_NAME } from "../../action/auth/auth";

let authState = {
    id: '',
    password:'',
    name:'',
    age:0
}


const authReducer = (state = authState, action)=>{
    switch(action.type){
        case SET_AGE:
            return{...state, age:action.payload}
        case SET_ID:
            return{...state, id:action.payload}
        case SET_PASSWORD:
            return{...state, password:action.payload}
        case SET_NAME:
            return{...state, name:action.payload}
        default:
            return state
    }
}

export default authReducer;