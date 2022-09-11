import React from 'react';
import Arrow from '../../image/arrowBack.svg'

import './save.css';

let MySave = ()=>{
    return(
        <div className='MySave'>
            <div className='image-box'>
                <img src={Arrow}/>
            </div>

            <div className='title-box'>
                <h2>내가 다녀온 여행</h2>
            </div>
        </div>
    );
}

export default MyTrip;