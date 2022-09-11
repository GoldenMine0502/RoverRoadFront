import React from "react";
import {useNavigate} from 'react-router-dom';

let ViewThumbnail = (props)=>{
    const navigate = useNavigate();

    let onClickThumbnail = ()=>{
        navigate("/main/road/detail/"+props.roadToken);
    }
    
    return(
        <div className="Thumbnail" onClick={onClickThumbnail}>
            {/* <h2 className="thumbnail-time">7:00AM</h2>
             */}
            <img className="thumbnail-image" src={props.image}/>

            <div className="data-box">

                <div className="title-box">
                    <h2>{props.name}</h2>

                    <p>★ {props.star}</p>
                </div>

                <div className="text-box">
                    <h2>{props.description}</h2>
                    <p>{props.price}</p>
                </div>
            </div>
        </div>
    );
}

export default ViewThumbnail;