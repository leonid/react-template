import React from 'react';
import {Route, IndexRoute} from 'react-router/es6';
import  AsyncRoute from 'components/AsyncRoute';

import App from 'containers/App';
import Home from 'containers/Home';

export default () => {
    const loadRouteAsync = path => (nextState, cb) => {
        System.import(path).then(module => {
            cb(null, module);
        });
    };

    return (
        <Route path='/' component={App}>
            <IndexRoute component={Home}/>
            <AsyncRoute path='aircraft' async='containers/Aircraft'>
                <AsyncRoute path='factbooks' async='containers/Factbooks'/>
            </AsyncRoute>
            <Route path='analytics' component={Home}/>
            <Route path='clients' component={Home}/>
            <Route path='staff' component={Home}/>
        </Route>
    );

};
