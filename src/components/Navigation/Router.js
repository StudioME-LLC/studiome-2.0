import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

export default function Router() {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" exact>Home Page</Route>
                <Route path="/checkout" exact>Checkout Page</Route>
                <Route path="/about" exact>About Page</Route>
                <Route path="/projects" exact>Our Projects Page</Route>
                <Route path="/contact" exact>Contact Page</Route>
                <Redirect to="/" exact />
            </Switch>
        </React.Fragment>
    )
}
