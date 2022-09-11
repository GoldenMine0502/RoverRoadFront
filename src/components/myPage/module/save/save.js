import React from 'react';
import { useNavigate } from 'react-router-dom';

import Arrow from '../../../image/arrowBack.svg'
import './save.css';

let MySave = ()=>{
    const navigate = useNavigate();
    
    let onBack = ()=>{
        navigate("/main/my");
    }
    return(
        <div className='MySave'>
            <div className='image-box'>
                <img src={Arrow} onClick={onBack}/>
            </div>

            <div className='title-box'>
                <h2>내가 저장한 여행</h2>
            </div>
        </div>
    );
}

export default MySave;