import React from 'react';
import { Link } from 'react-router-dom';

import '../travel.css';
import Profile from '../../image/Profile.png';

let TravelList = ()=>{
    return(
        <div className='TravelList'>
           <Link to="/main/travel/detail">
                <div className='number-box'>
                    <h2>1</h2>
                </div>
                <div className='image-box'>
                    <img src={Profile}/>
                </div>
                <div className='text-box'>
                    <h2>습지생태여행</h2>
                    <div className='text-data-box'>
                        <p>순천만 외 23곳</p>
                    </div>
                </div>
           </Link>
        </div>
    );
}

export default TravelList;