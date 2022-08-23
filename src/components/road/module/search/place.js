import React from "react";

import Arrow from '../../../image/arrowBack.svg';
import RoadSearch from '../../../image/roadSearch.svg';


let SearchPlace = ()=>{
    return(
        <div className="Search-bar">
            <img src={Arrow}/>

            <input type="text" placeholder="장소 검색"/>

            <img src={RoadSearch}/>
        </div>
    );
}

export default SearchPlace;
