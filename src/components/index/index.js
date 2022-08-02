import React from 'react';

import Logo from '../image/indexLogo.svg';
import './index.css'

let Index = ()=>{
    return(
        <div className='Index'>
            <div className='image-box'>
                <img src={Logo}/>
            </div>

            <div className='btn-box'>
                <div className='login-btn'>로그인</div>

                <div className='register-btn'>회원가입</div>
            </div>
        </div>
    );
}

export default Index;