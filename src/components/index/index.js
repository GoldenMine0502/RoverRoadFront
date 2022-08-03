import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../image/indexLogo.svg';
import './index.css'

let Index = ()=>{
    return(
        <div className='Index'>
            <div className='image-box'>
                <img src={Logo}/>
            </div>

            <div className='btn-box'>
                <Link to="/login"><div className='login-btn'>로그인</div></Link>

                <Link to="/register"><div className='register-btn'>회원가입</div></Link>
            </div>
        </div>
    );
}

export default Index;