import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/imports.scss';
import * as serviceWorker from './serviceWorker';

//pages
import HomePage from './js/pages/HomePage';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route component=""/>
        </Switch>
    </Router>,
   document.getElementById('root')
 );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
