import React from "react";

import Img from '../../image/asdf.jpg'

let ThumbNail = (props)=>{
    return(
        <div className="Thumbnail">
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

export default ThumbNail;