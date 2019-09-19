import React from 'react';

// Components
import Spinner from '../../components/Spinner';

const HeroVideo = React.lazy(() => import ('./Media/HeroVideo'));

export default function Hero() {
    return (
        <div className="home__web-hero">

            <React.Suspense fallback={<Spinner />}>
                <HeroVideo />
            </React.Suspense>

            <div className="home__hero-circle" />
            
            <div className="home__hero-messaging">
                <h1 className="home__hero-heading">Media Made Easy</h1>
                <h3 className="home__hero-subheading">A user-friendly space for media creation.</h3>
            </div>
        </div>
    )
}
