import React from 'react';
import {Route, Routes} from "react-router-dom";
// @ts-ignore
import style from './App.module.css';
import Main from "./components/Main/Main";
import Project from "./components/Project/Project";
import Header from "./components/Header/Header";

const App = () => {

    return (
        <div className={style.app_wrapper}>


            <div className={style.header}>
                <Header/>
            </div>

            <div className={style.content}>

                <Routes>
                    <Route path={"/"} element={<Main/>}/>
                    <Route path={"/project/:projectID"} element={<Project/>}/>
                </Routes>

            </div>

        </div>
    );
}

export default App;
