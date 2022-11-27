import React from 'react';

import './register.css';
import Arrow from '../image/arrowBack.svg';
import {setAge, setId, setName, setPassword} from "../../redux/action/auth/auth";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import api from "../../api/api";

let Register = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {id, password, name, age} = useSelector((state)=>({
        id:state.auth.id,
        password:state.auth.password,
        name:state.auth.name,
        age:state.auth.age,
    }));

    const idOnChange = (e)=>{
        dispatch(setId(e.target.value));
    }

    const passwordOnChange = (e)=>{
        dispatch(setPassword(e.target.value));
    }

    const nameOnChange = (e)=>{
        dispatch(setName(e.target.value));
    }

    const ageOnChange = (e)=>{
        dispatch(setAge(parseInt(e.target.value)));
    }

    const registerSubmit = async (e)=>{
        console.log("submitting register...");
        let data = await api.register(id, password, name, age);
        console.log(data);
        if(data.status == 200){
            window.localStorage.setItem("userToken",data.data.userToken);
            navigate("/")
        }
        else{
            alert("이미 등록된 사용자입니다.")
        }
    }

    return(
        <div className='Register'>
            <div className='arrow-box'>
                <img src={Arrow}/>
            </div>
            <div className='title-box'>
                <h2>ROVER ROAD에 오신 것을<br/>환영합니다!</h2>
            </div>

            <div className='input-box'>
                <input type="text" onChange={nameOnChange} placeholder='이름을 입력해주세요'/>
            </div>

            <div className='input-box'>
                <input type="number" onChange={ageOnChange} placeholder='나이를 입력해주세요'/>
            </div>

            <div className='input-box'>
                <input type="text" onChange={idOnChange} placeholder='아이디를 입력해주세요'/>
            </div>

            <div className='input-box'>
                <input type="password" onChange={passwordOnChange} placeholder='비밀번호를 입력해주세요'/>
            </div>

            <div className='register-box' onClick={registerSubmit}>
                <div className='register-btn'>가입하기</div>
            </div>

            <div className='text-box'>
                <p>“가입하기” 버튼을 누르면 ROVER ROAD의<br/>이용 약관 및 개인정보처리정책에 동의합니다.</p>
            </div>
        </div>
    );
}

export default Register;