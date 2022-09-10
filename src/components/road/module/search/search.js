import React from "react";
import {Route, Routes} from 'react-router-dom';

import { useSelector } from "react-redux";

import Place from './place';
import Hashtag from './hashtag';
import PlaceResult from './placeResult';
import HashtagResult from './hashtagResult';
import PlaceList from "./placeList";


import './search.css';

let Search = ()=>{
    const { roadList } = useSelector((state)=>({
        roadList:state.html.roadThumbnail
    }));
    return(
        <div className="Search">
            <Routes>
                <Route path="/search/*" element={<Place/>}></Route>
                <Route path="/search/result" element={<PlaceResult/>}></Route>
                <Route path="/hashtag/*" element={<Hashtag/>}></Route>
                <Route path="/hashtag/result" element={<HashtagResult/>}></Route>
            </Routes>
            <div className="line"></div>
            <Routes>
                <Route path="/search/*" element={<div>
                    {roadList.map((i, index)=>(<PlaceList key={index} index={index} name={i.name} image={i.image} star={i.star} description={i.description}></PlaceList>))}
                </div>}></Route>
                <Route path="/search/result" element={<div>
                    {roadList.map((i, index)=>(<PlaceList key={index} index={index} name={i.name} image={i.image} star={i.star} description={i.description}></PlaceList>))}
                </div>}></Route>

                <Route path="/hashtag/result" element={<div>
                        
                </div>}></Route>
            </Routes>
        </div>
    );
}

export default Search;