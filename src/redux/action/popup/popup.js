export const SET_ROAD_POPUP = "SET_ROAD_POPUP";
export const SET_GUIDE_POPUP = "SET_GUIDE_POPUP";

export function setRoadPopup(bool){
    return{
        type:SET_ROAD_POPUP,
        payload:bool
    }
}

export function setGuidePopup(bool){
    return{
        type:SET_GUIDE_POPUP,
        payload:bool
    }
}