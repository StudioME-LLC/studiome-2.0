import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import Spinner from '../components/Spinner';

// Pages
const Home = React.lazy(() => import ('../Pages/Home'));
const About = React.lazy(() => import ('../Pages/About'));
const Projects = React.lazy(() => import ('../Pages/Projects'));


export default function Router(props) {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" exact
                    render={() => 
                        <React.Suspense fallback={<Spinner />}>
                            <Home
                                sidebarSelection={props.sidebarSelection}
                            />
                        </React.Suspense>} 
                />
                <Route path="/checkout" exact />
                <Route path="/about" exact
                    render={() => 
                        <React.Suspense fallback={<Spinner />}>
                            <About
                                onQuickButtonFix={props.onQuickButtonFix}
                                onLargeSidebarSelection={props.onLargeSidebarSelection}
                                sidebarSelection={props.sidebarSelection}
                            />
                        </React.Suspense>} 
                />
                <Route path="/projects" exact
                    render={() => 
                        <React.Suspense fallback={<Spinner />}>
                            <Projects/>
                        </React.Suspense>} 
                />
                <Route path="/contact" exact>Contact Page</Route>
                <Redirect to="/" exact />
            </Switch>
        </React.Fragment>
    )
}
