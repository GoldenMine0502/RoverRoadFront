import { SET_ROAD_THUMBNAIL, SET_GUIDER_LIST, SET_GUIDER_DETAIL_LIST, SET_MY_TRIP, SET_MY_GUIDE, SET_ROAD_VIEW, SET_TRAVEL_LIST } from "../../action/html/html";

let htmlState = {
    roadThumbnail:[],
    guiderList:[],
    guiderDetailList:[],
    myTripList:[],
    myGuideList:[],
    roadViewList:[],
    travelList:[]
}

const htmlReducer = (state=htmlState, action)=>{
    switch(action.type){
        case SET_ROAD_THUMBNAIL:
            return{...state, roadThumbnail:action.payload}
        case SET_GUIDER_LIST:
            return{...state, guiderList:action.payload}
        case SET_GUIDER_DETAIL_LIST:
            return{...state, guiderDetailList:action.payload}
        case SET_MY_TRIP:
            return{...state, myTripList:action.payload}
        case SET_MY_GUIDE:
            return{...state, myGuideList:action.payload}
        case SET_ROAD_VIEW:
            return{...state, roadViewList:action.payload}
        case SET_TRAVEL_LIST:
            return{...state, travelList:action.payload}
        default:
            return state
    }
}

export default htmlReducer;