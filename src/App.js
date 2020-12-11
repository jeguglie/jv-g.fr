import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import './assets/css/all.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {
    return (
    <div className="main">
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
    </div>
    );
}

export default App;
