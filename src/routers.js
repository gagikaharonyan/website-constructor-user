import React from "react";
import {Switch} from 'react-router-dom'
import {AppRouter} from './Components/AppRouter/AppRouter'
import UserLayout from "./Components/layouts/UserLayout";
import {Home, Post} from "./view";
import { AboutUs } from './view/AboutUs/AboutUs';

export const Routers = () => {

    return (
        <>
            <Switch>
                <AppRouter exact path={'/'} layout={UserLayout} component={Home}/>
                <AppRouter exact path={'/about'} layout={UserLayout} component={AboutUs}/>

                <AppRouter exact path={'/post/:title'} layout={UserLayout} component={Post}/>
            </Switch>
        </>
    )
}