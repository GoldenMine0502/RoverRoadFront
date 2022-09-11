import { SET_NOW_GUIDER_TOKEN, SET_GUIDER_DETAIL_FOLLOW, SET_GUIDER_DETAIL_FOLLOWING, SET_GUIDER_DETAIL_IMAGE, SET_GUIDER_DETAIL_IS_FOLLOW, SET_GUIDER_DETAIL_NAME } from "../../action/guider/guider";

let guiderState = {
    guiderToken:'',
    follow:0,
    following:0,
    name:'',
    image:'',
    isFollow:false
}

const guiderReducer = (state = guiderState, action)=>{
    switch(action.type){
        case SET_NOW_GUIDER_TOKEN:
            return{...state, guiderToken:action.payload}
        case SET_GUIDER_DETAIL_FOLLOW:
            return{...state, follow:action.payload}
        case SET_GUIDER_DETAIL_FOLLOWING:
            return{...state, following:action.payload}
        case SET_GUIDER_DETAIL_IMAGE:
            return{...state, image:action.payload}
        case SET_GUIDER_DETAIL_IS_FOLLOW:
            return{...state, isFollow:action.payload}
        case SET_GUIDER_DETAIL_NAME:
            return{...state, name:action.payload}
        default:
            return state
    }
}

export default guiderReducer;