import React from "react";

import Img from '../../image/asdf.jpg'

let ThumbNail = ()=>{
    return(
        <div className="Thumbnail">
            <h2 className="thumbnail-time">7:00AM</h2>
            
            <img className="thumbnail-image" src={Img}/>

            <div className="data-box">

                <div className="title-box">
                    <h2>당진그린호텔</h2>

                    <p>★ 4.5</p>
                </div>

                <div className="text-box">
                    <h2>그럭저럭 잘만 한 호텔</h2>
                    <p>143,000원</p>
                </div>
            </div>
        </div>
    );
}

export default ThumbNail;