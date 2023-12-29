import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Global from "./Global";

/*let posts = [
    {id: 0, message: "It's my first post.", likesCount: 2},
    {id: 1, message: "It's my second post.", likesCount: 25},
    {id: 1, message: "It's my third post.", likesCount: 100},
    {id: 1, message: "It's my fourth post.", likesCount: 13},
];

let dialogs = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Sasha'},
    {id: 3, name: 'Masha'},
    {id: 4, name: 'Dasha'},
    {id: 5, name: 'Vasya'},
    {id: 6, name: 'Natasha'}];

let messages = [
    {id: 0, message: "Hi! How are you?", timeStamp: "26.12.2023 10:13:42"},
    {id: 1, message: "Hello! I'm fine!", timeStamp: "26.12.2023 10:15:02"},
    {id: 2, message: "Where are you from?", timeStamp: "26.12.2023 10:20:23"}];*/

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App posts={Global.posts} dialogs={Global.dialogs} messages={Global.messages}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
