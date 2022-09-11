import React from "react";

let MyTripDetail = (props)=>{
    return(
        <div className="MyTripDetail">
            <img src={props.image}/>
            <div className="text-box">
                <h2>{props.title}</h2>
                <p>{props.subtitle}</p>
            </div>
        </div>
    );
}

export default MyTripDetail;