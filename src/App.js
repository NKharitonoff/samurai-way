import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/Friends/NavbarContainer";

const App = (props) => {
    debugger;
    return (
        <div className='app-wrapper'>
            <Header />
            <NavbarContainer store={props.store}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile' element={<Profile store={props.store}/>} />
                    <Route path='/dialogs/*' element={<DialogsContainer store={props.store}/>} />
                </Routes>
            </div>
        </div>
    );
}

export default App;