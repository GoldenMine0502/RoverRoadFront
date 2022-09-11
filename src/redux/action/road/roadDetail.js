export const SET_ROAD_DETAIL_NAME = "SET_ROAD_DETAIL_NAME";
export const SET_ROAD_DETAIL_IMAGE = "SET_ROAD_DETAIL_IMAGE";
export const SET_ROAD_DETAIL_COUNT = "SET_ROAD_DETAIL_COUNT";
export const SET_ROAD_DETAIL_PLACEURL = "SET_ROAD_DETAIL_PLACEURL";


export function setRoadDetailName(name){
    return{
        type:SET_ROAD_DETAIL_NAME,
        payload:name
    }
}

export function setRoadDetailImage(image){
    return{
        type:SET_ROAD_DETAIL_IMAGE,
        payload:image
    }
}

export function setRoadDetailCount(count){
    return{
        type:SET_ROAD_DETAIL_COUNT,
        payload:count
    }
}

export function setRoadDetailPlaceURL(placeURL){
    return{
        type:SET_ROAD_DETAIL_PLACEURL,
        payload:placeURL
    }
}