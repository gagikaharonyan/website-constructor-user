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
                <AppRouter path={'/home'} layout={UserLayout} component={Home}/>
                <AppRouter path={'/post/:title'} layout={UserLayout} component={Post}/>
                <AppRouter path={'/contactus'} layout={UserLayout} component={ContactUs}/>
                <AppRouter path={'/aboutUs'} layout={UserLayout} component={AboutUs}/>
                <AppRouter path={'/posts'} layout={UserLayout} component={Posts}/>
                <AppRouter path={'/events'} layout={UserLayout} component={Events}/>
                <AppRouter path={'/event/:id'} layout={UserLayout} component={Event}/>
            </Switch>
        </>
    )
}