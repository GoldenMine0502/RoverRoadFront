import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Edit from '../../image/edit.svg';
import ThumbNail from '../../image/asdf.jpg';

let TripThumbnail = (props)=>{
    const navigate = useNavigate();

    let onClickThumbnail = ()=>{
        navigate("/main/road/view/"+props.roadToken);
    }

    return(
        <div className="TripThumbnail" onClick={onClickThumbnail}>
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