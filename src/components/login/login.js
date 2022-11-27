import React from 'react';
import {Link} from 'react-router-dom';
import api from '../../api/api';
import {useDispatch, useSelector} from 'react-redux';
import { setId, setPassword } from '../../redux/action/auth/auth';
import { useNavigate } from 'react-router-dom';

import Logo from '../image/logo.svg';
import './login.css'
import Arrow from "../image/arrowBack.svg";

let Login = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const {id, password} = useSelector((state)=>({
        id:state.auth.id,
        password:state.auth.password
    }));

    const idOnChange = (e)=>{
        dispatch(setId(e.target.value));
    }

    const passwordOnChange = (e)=>{
        dispatch(setPassword(e.target.value));
    }

    const authSubmit = async (e)=>{
        console.log("submitting login...");
        let data = await api.auth(id, password);
        console.log(data);
        if(data.status == 200){
            window.localStorage.setItem("userToken",data.data.userToken);
            navigate("/main/post")
        }
        else{
            alert("올바른 아이디와 패스워드를 입력해주세요")
        }
    }

    const backButtonOnClick = (e) => {
        navigate("/")
    }

    return(
        <div className='Login'>
            <div className='data'>
                <div className='arrow-box'>
                    <img src={Arrow} onClick={backButtonOnClick}/>
                </div>
                <div className='logo-box'>
                    <img src={Logo}/>
                </div>

                <div className='input-box'>
                    <input type="text" onChange={idOnChange} placeholder='아이디를 입력해주세요'/>
                </div>

                <div className='input-box'>
                    <input type="password" onChange={passwordOnChange} placeholder='비밀번호를 입력해주세요'/>
                </div>

                <div className='login-box'>
                    <div className='login-btn' onClick={authSubmit}>로그인</div>
                </div>
            </div>

            <div className='register'>
                <Link to="/register">계정이 없으신가요?</Link>
            </div>
        </div>
    );
}

export default Login;