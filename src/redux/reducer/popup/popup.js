import { SET_GUIDE_POPUP, SET_ROAD_POPUP } from "../../action/popup/popup";

let popupState = {
    guidePopup:false,
    roadPopup:false
}

const popupReducer = (state=popupState, action)=>{
    switch(action.type){
        case SET_GUIDE_POPUP:
            return{...state, guidePopup:action.payload}
        case SET_ROAD_POPUP:
            return{...state, roadPopup:action.payload}
        default:
            return state
    }
}

export default popupReducer;