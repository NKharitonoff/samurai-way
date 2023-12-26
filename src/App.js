import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/dialogs" element={<Dialogs/>}/>
                        <Route path="/profile"/>
                        <Route path="/profile"/>
                        <Route path="/profile"/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;