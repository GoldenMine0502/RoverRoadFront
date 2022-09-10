export const SET_ID = "SET_ID";
export const SET_PASSWORD = "SET_PASSWORD";
export const SET_NAME = "SET_NAME";
export const SET_AGE = "SET_AGE";

export function setId(id){
    return{
        type:SET_ID,
        payload:id
    }
}

export function setPassword(password){
    return{
        type:SET_PASSWORD,
        payload:password
    }
}

export function setName(name){
    return{
        type:SET_NAME,
        payload:name
    }
}

export function setAge(age){
    return{
        type:SET_AGE,
        payload:age
    }
}