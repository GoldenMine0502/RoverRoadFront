import React from 'react';

import './register.css';
import Arrow from '../image/arrowBack.svg';

let Register = ()=>{
    return(
        <div className='Register'>
            <div className='arrow-box'>
                <img src={Arrow}/>
            </div>
            <div className='title-box'>
                <h2>ROVER ROAD에 오신 것을<br/>환영합니다!</h2>
            </div>

            <div className='input-box'>
                <input type="text" placeholder='이름을 입력해주세요'/>
            </div>

            <div className='input-box'>
                <input type="text" placeholder='나이를 입력해주세요'/>
            </div>

            <div className='input-box'>
                <input type="text" placeholder='아이디를 입력해주세요'/>
            </div>

            <div className='input-box'>
                <input type="password" placeholder='비밀번호를 입력해주세요'/>
            </div>

            <div className='register-box'>
                <div className='register-btn'>가입하기</div>
            </div>

            <div className='text-box'>
                <p>“가입하기” 버튼을 누르면 ROVER ROAD의<br/>이용 약관 및 개인정보처리정책에 동의합니다.</p>
            </div>
        </div>
    );
}

export default Register;