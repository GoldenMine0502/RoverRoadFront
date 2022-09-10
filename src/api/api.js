import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8080";

export default{
    auth(id, password){
        return axios({
            method:'POST',
            url:'/auth/login',
            data:{
                id:id,
                password:password
            }
        }).catch((err)=>{return err;});
    },
    register(id, password, name, age){
        return axios({
            method:'POST',
            url:'/auth/register',
            data:{
                id:id,
                password:password,
                name:name,
                age:age
            }
        })
    },
}