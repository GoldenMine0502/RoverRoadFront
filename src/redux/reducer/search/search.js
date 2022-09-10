import { SET_ROAD_SEARCH, SET_CALENDER_SEARCH, SET_CALENDER_USER } from "../../action/search/search";

let searchState = {
    road:'',
    calender:'',
    calenderUser:''
}

const searchReducer = (state = searchState, action)=>{
    switch(action.type){
        case SET_ROAD_SEARCH:
            return{...state, road:action.payload}
        case SET_CALENDER_SEARCH:
            return{...state, calender:action.payload}
        case SET_CALENDER_USER:
            return{...state, calenderUser:action.payload}
        default:
            return state
    }
}

export default searchReducer;