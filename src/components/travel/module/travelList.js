import React from 'react';
import { Link } from 'react-router-dom';

import '../travel.css';
import Profile from '../../image/Profile.png';

let TravelList = (props)=>{
    return(
        <div className='TravelList'>

            <div className='number-box'>
                <h2>{props.index + 1}</h2>
            </div>
            <div className='image-box'>
                <img src={props.thumbnail}/>
            </div>
            <div className='title-box'>
                <h2>{props.name}</h2>
                <div className='text-data-box'>
                    <p>송도 안 {props.amount} 곳</p>
                </div>
            </div>
    
        </div>
    );
}

export default TravelList;