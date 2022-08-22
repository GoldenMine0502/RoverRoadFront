import React from "react";

import Self from '../../image/addRoad-self.svg';
import Auto from '../../image/addRoad-auto.svg';

let AddRoad = ()=>{
    return(
        <div className="AddRoad">
            <div className="add-box">
                <h2 className="title">일정 만들기</h2>
                <p className="subtitle">일정을 어떤 방식으로 만들지 골라주세요</p>

                <div className="line"></div>

                <div className="select-box">
                    <img src={Self}/>
                    <h2>직접 일정 만들기</h2>
                </div>          

                <div className="line"></div>

                <div className="select-box">
                    <img src={Auto}/>
                    <h2>자동으로 일정 만들기</h2>
                </div>      

                <div className="line"></div>

            </div>
        </div>
    );
}

export default AddRoad;