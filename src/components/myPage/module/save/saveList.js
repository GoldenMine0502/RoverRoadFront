import React from "react";

let SaveList = (props)=>{
    return(
        <div className="SaveList">
            <img src={props.image}/>
            <div className="text-box">
                <h2>{props.title}</h2>
                <p>{props.subtitle}</p>
            </div>
        </div>
    );
}

export default SaveList;