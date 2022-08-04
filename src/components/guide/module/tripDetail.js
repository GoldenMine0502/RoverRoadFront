import React from "react";
import ThumbNail from '../../image/asdf.jpg';

let TripDetail = ()=>{
    return(
        <div className="TripThumbnail">
            <img src={ThumbNail}/>
            <div className="text-box">
                <h2>서해 석양 여행</h2>
                <p>전라남도 영광 외 10곳</p>
            </div>
        </div>
    );
}

export default TripDetail;