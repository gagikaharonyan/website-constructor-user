import React from "react";
import {Switch} from 'react-router-dom'
import {AppRouter} from './Components/AppRouter/AppRouter'
import UserLayout from "./Components/layouts/UserLayout";
import {Home, Post, ContactUs, AboutUs, Posts, Event, Events} from "./view";

export const Routers = () => {

    return (
        <>
            <Switch>
                <AppRouter exact path={'/'} layout={UserLayout} component={Home}/>
                <AppRouter path={'/post/:title'} layout={UserLayout} component={Post}/>
                <AppRouter path={'/contact'} layout={UserLayout} component={ContactUs}/>
                <AppRouter path={'/about'} layout={UserLayout} component={AboutUs}/>
                <AppRouter path={'/posts'} layout={UserLayout} component={Posts}/>
                <AppRouter path={'/events'} layout={UserLayout} component={Events}/>
                <AppRouter path={'/event/:title'} layout={UserLayout} component={Event}/>
            </Switch>
        </>
    )
}