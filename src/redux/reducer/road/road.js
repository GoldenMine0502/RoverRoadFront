import { SET_AUTO_CREATE, SET_SAVE_ROAD } from "../../action/road/roadThumbnail";
import {SET_ROAD_CALENDER_LIST, SET_ROAD_CALENDER_LIST_CLEAR} from '../../action/road/roadCalender';

let roadState = {
    autoCreate:[],
    saveRoad:[],
    calender:[]
}

const roadReducer = (state = roadState, action)=>{
    switch(action.type){
        case SET_AUTO_CREATE:
            return{...state, autoCreate:action.payload}
        case SET_SAVE_ROAD:
            return{...state, saveRoad:action.payload}
        case SET_ROAD_CALENDER_LIST:
            return{...state, calender:[...state.calender, action.payload]}
        case SET_ROAD_CALENDER_LIST_CLEAR:
            return{...state, calender:action.payload}
        default:
            return state
    }
}

export default roadReducer;