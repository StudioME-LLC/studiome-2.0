import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import Spinner from '../components/Spinner';

// Pages
const Home = React.lazy(() => import ('../Pages/Home'));
const Equipment = React.lazy(() => import ('../Pages/Home/Products/Equipment'));

const About = React.lazy(() => import ('../Pages/About'));
const Events = React.lazy(() => import ('../Pages/Community/Events'));
const Learn = React.lazy(() => import ('../Pages/Community/Learn'));
const Gallery = React.lazy(() => import ('../Pages/Community/Gallery'));

export default function Router(props) {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" exact
                    render={() => 
                        <React.Suspense fallback={<Spinner />}>
                            <Home
                                sidebarSelection={props.sidebarSelection}
                                onQuickButtonFix={props.onQuickButtonFix}
                            />
                        </React.Suspense>} 
                />
                <Route path="/checkout" exact />
                <Route path="/about" exact
                    render={() => 
                        <React.Suspense fallback={<Spinner />}>
                            <About
                                location={props.location}
                                onQuickButtonFix={props.onQuickButtonFix}
                                onLargeSidebarSelection={props.onLargeSidebarSelection}
                                sidebarSelection={props.sidebarSelection}
                            />
                        </React.Suspense>} 
                />
                <Route path="/community/events" exact
                    render={() => 
                        <React.Suspense fallback={<Spinner />}>
                            <Events />
                        </React.Suspense>} 
                />
                <Route path="/community/learn" exact
                    render={() => 
                        <React.Suspense fallback={<Spinner />}>
                            <Learn />
                        </React.Suspense>} 
                />
                <Route path="/community/gallery" exact
                    render={() => 
                        <React.Suspense fallback={<Spinner />}>
                            <Gallery />
                        </React.Suspense>} 
                />
                <Route path="/equipment" exact
                    render={() => 
                        <React.Suspense fallback={<Spinner />}>
                            <Equipment />
                        </React.Suspense>} 
                />

                {/* <Route path="/lighting" exact
                    render={() => 
                        <React.Suspense fallback={<Spinner />}>
                            <Equipment
                                title={'Lighting'}
                                link={'https://studiome.me/wp-json/wp/v2/pages/965'}
                            />
                        </React.Suspense>} 
                />

                <Route path="/audio" exact
                    render={() => 
                        <React.Suspense fallback={<Spinner />}>
                            <Equipment
                                title={'Audio'}
                                link={'https://studiome.me/wp-json/wp/v2/pages/963'}
                            />
                        </React.Suspense>} 
                /> */}
                <Redirect to="/" exact />
            </Switch>
        </React.Fragment>
    )
}
