import React from "react";
import { Link } from "react-router-dom";

import Edit from '../../image/edit.svg';
import ThumbNail from '../../image/asdf.jpg';

let TripThumbnail = ()=>{
    return(
        <div className="TripThumbnail">
            <img src={ThumbNail}/>
            <div className="text-box">
                <h2>서해 석양 여행</h2>
                <p>전라남도 영광 외 10곳</p>
            </div>
            <img src={Edit}/>
        </div>
    );
}

export default TripThumbnail;