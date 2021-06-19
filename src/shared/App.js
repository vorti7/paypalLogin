import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Main, PayResult } from '../pages';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Main}/>
                <Route path="/payresult" component={PayResult}/>
            </div>
        );
    }
}

export default App;