import React from "react";
import {Switch} from 'react-router-dom'
import {AppRouter} from './Components/AppRouter/AppRouter'
import UserLayout from "./Components/layouts/UserLayout";
import {Home} from "./view"


export const Routers = () => {

    return (
        <>
            <Switch>
                <AppRouter exact path={'/'} layout={UserLayout} component={Home}/>
            </Switch>
        </>
    )
}