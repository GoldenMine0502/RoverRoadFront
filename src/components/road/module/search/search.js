import React from "react";
import {Route, Routes} from 'react-router-dom';

import Place from './place';
import Hashtag from './hashtag';
import PlaceResult from './placeResult';
import HashtagResult from './hashtagResult';


import './search.css';

let Search = ()=>{
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
                <Route path="/search/result" element={<div>
                    
                </div>}></Route>

                <Route path="/hashtag/result" element={<div>
                        
                </div>}></Route>
            </Routes>
        </div>
    );
}

export default Search;