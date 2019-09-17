import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import Spinner from '../components/Spinner';

// Pages
const Home = React.lazy(() => import ('../Pages/Home'));


export default function Router() {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" exact
                render={() => 
                    <React.Suspense fallback={<Spinner />}>
                        <Home />
                    </React.Suspense>} 
                />
                <Route path="/checkout" exact>Checkout Page</Route>
                <Route path="/about" exact>About Page</Route>
                <Route path="/projects" exact>Our Projects Page</Route>
                <Route path="/contact" exact>Contact Page</Route>
                <Redirect to="/" exact />
            </Switch>
        </React.Fragment>
    )
}
