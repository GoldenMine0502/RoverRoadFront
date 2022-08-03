import React from "react";
import {Route, Routes} from 'react-router-dom';

import Footer from "../footer/footer";
import View from './view';
import Road from "../road/road";

import Logo from '../image/logo.svg';
import './main.css';

let Main = ()=>{
    return(
        <div className="Main">
            <Routes>
                <Route path="/post/*" element={<View/>}></Route>
                <Route path="/road/*" element={<Road/>}></Route>    
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default Main;