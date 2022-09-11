export const SET_ROAD_THUMBNAIL = "SET_ROAD_THUMBNAIL";
export const SET_GUIDER_LIST = "SET_GUIDER_LIST";
export const SET_GUIDER_DETAIL_LIST = "SET_GUIDER_DETAIL_LIST";
export const SET_MY_TRIP = "SET_MY_TRIP";
export const SET_MY_GUIDE = "SET_MY_GUIDE";
export const SET_ROAD_VIEW = "SET_ROAD_VIEW";
export const SET_TRAVEL_LIST = "SET_TRAVEL_LIST"

export function setRoadThumbnail(html){
    return{
        type:SET_ROAD_THUMBNAIL,
        payload:html
    }
}

export function setGuiderList(html){
    return{
        type:SET_GUIDER_LIST,
        payload:html
    }
}

export function setGuiderDetailList(html){
    return{
        type:SET_GUIDER_DETAIL_LIST,
        payload:html
    }
}

export function setMyTrip(html){
    return{
        type:SET_MY_TRIP,
        payload:html
    }
}

export function setMyGuide(html){
    return{
        type:SET_MY_GUIDE,
        payload:html
    }
}

export function setRoadView(html){
    return{
        type:SET_ROAD_VIEW,
        payload:html
    }
}

export function setTravelList(html){
    return{
        type:SET_TRAVEL_LIST,
        payload:html
    }
}