export const SET_NOW_GUIDER_TOKEN = "SET_NOW_GUIDER_TOKEN";
export const SET_GUIDER_DETAIL_FOLLOW = "SET_GUIDER_DETAIL_FOLLOW";
export const SET_GUIDER_DETAIL_FOLLOWING = "SET_GUIDER_DETAIL_FOLLOING"
export const SET_GUIDER_DETAIL_IS_FOLLOW = "SET_GUIDER_DETAIL_IS_FOLLOW";
export const SET_GUIDER_DETAIL_NAME = "SET_GUIDER_DETAIL_NAME";
export const SET_GUIDER_DETAIL_IMAGE = "SET_GUIDER_DETAIL_IMAGE";

export function setNowGuiderToken(guiderToken){
    return{
        type:SET_NOW_GUIDER_TOKEN,
        payload:guiderToken
    }
}

export function setGuiderDetailFollow(follow){
    return{
        type:SET_GUIDER_DETAIL_FOLLOW,
        payload:follow
    }
}

export function setGuiderDetailFollowing(following){
    return{
        type:SET_GUIDER_DETAIL_FOLLOWING,
        payload:following
    }
}

export function setGuiderDetailIsFollow(isFollow){
    return{
        type:SET_GUIDER_DETAIL_IS_FOLLOW,
        payload:isFollow
    }
}

export function setGuiderDetailName(name){
    return{
        type:SET_GUIDER_DETAIL_NAME,
        payload:name
    }
}

export function setGuiderDetailImage(image){
    return{
        type:SET_GUIDER_DETAIL_IMAGE,
        payload:image
    }
}