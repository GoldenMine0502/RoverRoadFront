import React from "react";

import Arrow from '../../../image/arrowBack.svg';
import RoadSearch from '../../../image/roadSearch.svg';


let SearchHashtag = ()=>{
    return(
        <div className="Search-bar">
            <img src={Arrow}/>

            <input type="text" placeholder="해시테그 검색"/>

            <img src={RoadSearch}/>
        </div>
    );
}

export default SearchHashtag;
