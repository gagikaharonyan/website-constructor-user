import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Routers} from "./routers"
import {store} from "./store/store";
import {Provider} from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css';
import FireBase, {FireBaseContext} from './firebase';
import theme from './index.theme';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from '@material-ui/core/styles';
import './main.css'

ReactDOM.render(
    <Provider store={store}>
        <FireBaseContext.Provider value={new FireBase()}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routers/>
                </BrowserRouter>
            </ThemeProvider>   
        </FireBaseContext.Provider>
    </Provider>,
    document.getElementById('root')
);


serviceWorker.unregister();
