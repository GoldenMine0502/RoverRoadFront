import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import '../travel.css';
import Profile from '../../image/Profile.png';

let TravelList = (props)=>{
    const navigate = useNavigate();

    let onClick = ()=>{
        navigate("/main/map/detail/"+props.makeRoadToken);
    }
    return(
        <div className='TravelList' onClick={onClick}>

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