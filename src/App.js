import './App.css';

import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Index from './components/index/index';
import Login from './components/login/login';
import Register from './components/register/register';
import Main from './components/main/main';
import Article from './components/article/article';
import RoadThumbnail from './components/road/module/roadThumbnail/roadThumbnail';

let App = ()=>{
  return(
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Index/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/main/*" element={<Main/>}></Route>
          <Route path="/main/road/list" element={<RoadThumbnail/>}></Route>
          <Route path="/article" element={<Article/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;