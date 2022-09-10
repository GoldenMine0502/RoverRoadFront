import { SET_POST_LIST } from "../../action/post/post";
import {SET_NOW_POST_CONTENT, SET_NOW_POST_IMAGE, SET_NOW_POST_TITLE, SET_NOW_POST_TOKEN} from '../../action/post/nowPost';

let postState = {
    postList:[],
    nowPostToken:'',
    title:'',
    image:'',
    content:'',
}

const postReducer = (state=postState, action)=>{
    switch(action.type){
        case SET_POST_LIST:
            return{...state, postList:action.payload}
        case SET_NOW_POST_CONTENT:
            return{...state, content:action.payload}
        case SET_NOW_POST_IMAGE:
            return{...state, image:action.payload}
        case SET_NOW_POST_TITLE:
            return{...state, title:action.payload}
        case SET_NOW_POST_TOKEN:
            return{...state, nowPostToken:action.payload}
        default:
            return state
    }
}

export default postReducer;