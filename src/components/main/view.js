import React from "react";

import PostBox from "./module/post";

import Logo from '../image/logo.svg';

let View = ()=>{
    return(
        <div className="View">
            <div className="logo-box">
                <img src={Logo}/>
            </div>

            <PostBox></PostBox>
            <PostBox></PostBox>
            
            <div className="space"></div>
        </div>
    );
}

export default View;