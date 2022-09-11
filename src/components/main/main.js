import React, {useEffect} from "react";
import {Route, Routes} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { setId, setAge, setImage, setName, setUserToken } from "../../redux/action/user/user";
import api from '../../api/api';

import Footer from "../footer/footer";
import View from './view';
import Road from "../road/road";
import Guide from '../guide/guide';
import GuideDetail from '../guide/module/detail/detail';
import MyPage from "../myPage/mypage";
import Travel from "../travel/travel";
import MyTrip from "../myPage/module/trip/myTrip";
import MyGuide from "../myPage/module/guide/guide";
import MySave from '../myPage/module/save/save';

import Logo from '../image/logo.svg';
import './main.css';

let Main = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        async function setUserData(){
            let userToken = window.localStorage.getItem("userToken");

            let data = await api.getUser(userToken);
            if(data.status == 200){
                dispatch(setId(data.data.id));
                dispatch(setAge(data.data.age));
                dispatch(setImage(data.data.image));
                dispatch(setName(data.data.name));
                dispatch(setUserToken(data.data.userToken));
            }
            else{

            }
        }

        setUserData();
    },[]);
    return(
        <div className="Main">
            <Routes>
                <Route path="/post/*" element={<View/>}></Route>
                <Route path="/road/*" element={<Road/>}></Route>
                <Route path="/guide/*" element={<Guide/>}></Route>
                <Route path="/guide/detail" element={<GuideDetail/>}></Route>
                <Route path="/my/*" element={<MyPage/>}></Route>
                <Route path="/my/trip" element={<MyTrip/>}></Route>
                <Route path="/my/save" element={<MySave/>}></Route>
                <Route path="/my/guide" element={<MyGuide/>}></Route>
                <Route path="/map/*" element={<Travel/>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}   

export default Main;
