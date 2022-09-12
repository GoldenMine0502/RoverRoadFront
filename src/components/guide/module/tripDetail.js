import React from "react";
import {useNavigate} from 'react-router-dom';

let TripDetail = (props)=>{
    const navigate = useNavigate();

    let onClickThumbnail = ()=>{
        navigate("/main/road/view/"+props.makeRoadToken);
    }
    
    return(
        <div className="TripThumbnail" onClick={onClickThumbnail}>
            <img src={props.image}/>
            <div className="text-box">
                <h2>{props.title}</h2>
                <p>{props.subtitle}</p>
            </div>
        </div>
    );
}

export default TripDetail;