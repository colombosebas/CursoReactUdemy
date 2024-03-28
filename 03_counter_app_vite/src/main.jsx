import React from 'react';
import ReactDOM from 'react-dom/client';
import {App, App2, App3, App4, App5} from './HelloWorldApp'
import {AppFirst, AppFirst2, AppFirst3} from './FirstApp'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <App/>
        <App2/>
        <App3/>
        <App4/>
        <App5/>          */}
        <AppFirst/>
        <AppFirst2/>
        <AppFirst3/>
    </React.StrictMode>
)