import React from 'react';
import ReactDOM from 'react-dom/client';
import {AppFirst, AppFirst2, AppFirst3} from './FirstApp';
import {CounterApp} from './CounterApp';
import './style.css';

 ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
         <AppFirst title="Soy Goku"/>
         <AppFirst2/>
         <AppFirst3/>
         <CounterApp value={51}/>
     </React.StrictMode>
 )