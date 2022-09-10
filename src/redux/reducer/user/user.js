import { SET_AGE, SET_NAME, SET_USERTOKEN, SET_IMAGE, SET_ID } from "../../action/user/user";

let userState = {
    id:'',
    age:0,
    name:'',
    userToken:'',
    image:''
}

const userReducer = (state=userState, action)=>{
    switch(action.type){
        case SET_AGE:
            return{...state, age:action.payload}
        case SET_NAME:
            return{...state, name:action.payload}
        case SET_USERTOKEN:
            return{...state, userToken:action.payload}
        case SET_ID:
            return{...state, id:action.payload}
        case SET_IMAGE:
            return{...state, image:action.payload}
        default:
            return state
    }
}

export default userReducer;