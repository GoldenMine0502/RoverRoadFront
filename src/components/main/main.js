import React from "react";
import {Route, Routes} from 'react-router-dom';

import Footer from "../footer/footer";
import View from './view';
import Road from "../road/road";
import Guide from '../guide/guide';
import GuideDetail from '../guide/module/detail/detail';
import MyPage from "../myPage/mypage";

import Logo from '../image/logo.svg';
import './main.css';

let Main = ()=>{
    return(
        <div className="Main">
            <Routes>
                <Route path="/post/*" element={<View/>}></Route>
                <Route path="/road/*" element={<Road/>}></Route>
                <Route path="/guide/*" element={<Guide/>}></Route>
                <Route path="/guide/detail" element={<GuideDetail/>}></Route>
                <Route path="/my" element={<MyPage/>}></Route>

            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default Main;
