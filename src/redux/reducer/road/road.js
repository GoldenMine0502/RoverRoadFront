import { SET_AUTO_CREATE, SET_SAVE_ROAD } from "../../action/road/roadThumbnail";
import {SET_ROAD_CALENDER_LIST, SET_ROAD_CALENDER_LIST_CLEAR} from '../../action/road/roadCalender';
import {SET_VIEW_AMOUNT, SET_VIEW_NAME} from '../../action/road/roadView';
import {SET_ROAD_DETAIL_COUNT, SET_ROAD_DETAIL_IMAGE, SET_ROAD_DETAIL_NAME, SET_ROAD_DETAIL_PLACEURL} from '../../action/road/roadDetail';

let roadState = {
    autoCreate:[],
    saveRoad:[],
    calender:[],
    name:'',
    amount:0,
    detailName:'',
    detailImage:'',
    detailCount:0,
    detailPlaceURL:'',
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
        case SET_VIEW_AMOUNT:
            return{...state, amount:action.payload}
        case SET_VIEW_NAME:
            return{...state, name:action.payload}
        case SET_ROAD_DETAIL_COUNT:
            return{...state, detailCount:action.payload}
        case SET_ROAD_DETAIL_IMAGE:
            return{...state, detailImage:action.payload}  
        case SET_ROAD_DETAIL_NAME:
            return{...state, detailName:action.payload}
        case SET_ROAD_DETAIL_PLACEURL:
            return{...state, detailPlaceURL:action.payload}        
        default:
            return state
    }
}

export default roadReducer;