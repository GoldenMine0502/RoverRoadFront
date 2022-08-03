import React from "react";
import { Route, Routes, Link } from 'react-router-dom';

import PostModule from "./module/post";
import RoadModule from "./module/road";
import GuideModule from './module/guide';
import TravelModule from "./module/map";
import MyModule from './module/my';

import './footer.css';

let Footer = ()=>{
    return(
        <div className="Footer">
            <Routes>
                <Route path="/post/*" element={<PostModule/>}></Route>
                <Route path="/road/*" element={<RoadModule/>}></Route>
                <Route path="/guide/*" element={<GuideModule/>}></Route>
                <Route path="/map/*" element={<TravelModule/>}></Route>
                <Route path="/my/*" element={<MyModule/>}></Route>
            </Routes>
         
        </div>
    );
}

export default Footer;