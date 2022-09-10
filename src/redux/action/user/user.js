export const SET_ID = "SET_ID";
export const SET_USERTOKEN = "SET_USERCODE";
export const SET_NAME = "SET_NAME";
export const SET_AGE = "SET_AGE";
export const SET_IMAGE = "SET_IMAGE";

export function setId(id){
    return{
        type:SET_ID,
        payload:id
    }
}

export function setUserToken(userToken){
    return{
        type:SET_USERTOKEN,
        payload:userToken
    }
}

export function setName(userName){
    return{
        type:SET_NAME,
        payload:userName
    }
}

export function setAge(age){
    return{
        type:SET_AGE,
        payload:age
    }
}

export function setImage(image){
    return{
        type:SET_IMAGE,
        payload:image
    }
}