import React from "react";
import { Link } from "react-router-dom";

import Edit from '../../image/edit.svg';
import ThumbNail from '../../image/asdf.jpg';

let TripThumbnail = (props)=>{
    return(
        <div className="TripThumbnail">
            <img src={props.image}/>
            <div className="text-box">
                <h2>{props.title}</h2>
                <p>{props.subtitle}</p>
            </div>
            <img src={Edit}/>
        </div>
    );
}

export default TripThumbnail;