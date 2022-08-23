import React from "react";

import Arrow from '../../../image/arrowBack.svg';
import RoadClose from '../../../image/roadClose.svg';


let SearchHashtagResult = ()=>{
    return(
        <div className="Search-bar">
            <img src={Arrow}/>

            <h2 className="hashtag-h2">#당진</h2>

            <img src={RoadClose}/>
        </div>
    );
}

export default SearchHashtagResult;
