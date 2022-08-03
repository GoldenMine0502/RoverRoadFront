import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../image/logo.svg';
import './login.css'

let Login = ()=>{
    return(
        <div className='Login'>
            <div className='data'>
                <div className='logo-box'>
                    <img src={Logo}/>
                </div>

                <div className='input-box'>
                    <input type="text" placeholder='아이디를 입력해주세요'/>
                </div>

                <div className='input-box'>
                    <input type="password" placeholder='비밀번호를 입력해주세요'/>
                </div>

                <div className='login-box'>
                    <div className='login-btn'><Link to="/main/post">로그인</Link></div>
                </div>
            </div>

            <div className='register'>
                <Link to="/register">계정이 없으신가요?</Link>
            </div>
        </div>
    );
}

export default Login;