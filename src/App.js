import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileInfo/ProfileContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer />
            <Navbar />
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile/:userId' element={<ProfileContainer />} />
                    <Route path='/dialogs/*' element={<DialogsContainer />} />
                    <Route path='/users' element={<UsersContainer />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;