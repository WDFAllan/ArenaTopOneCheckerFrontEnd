import React from 'react';

import MainPage from '../components/MainPage.tsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function DefineRoutes(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage/>}></Route>
            </Routes>
        </Router>
    )
}