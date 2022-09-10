export const SET_ROAD_SEARCH = "SET_ROAD_SEARCH";
export const SET_CALENDER_SEARCH = "SET_CALENDER_SEARCH";
export const SET_CALENDER_USER = "SET_CALENDER_USER"

export function setRoadSearch(road){
    return{
        type:SET_ROAD_SEARCH,
        payload:road
    }
}

export function setCalenderSearch(text){
    return{
        type:SET_CALENDER_SEARCH,
        payload:text
    }
}

export function setCalenderUser(user){
    return{
        type:SET_CALENDER_USER,
        payload:user
    }
}