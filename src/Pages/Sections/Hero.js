import React, { Component } from 'react'

import Lottie from 'react-lottie';

import videoSVG from '../../assets/home/hero/video.json';

// Components
import Spinner from '../../components/Spinner';

const HeroVideo = React.lazy(() => import ('./Media/HeroVideo'));

export default class Hero extends Component {

    constructor(props) {
        super(props);
        this.state = {isStopped: false, isPaused: false};
    }
    
    render() {

        const defaultOptions = {
            loop: true,
            autoplay: true, 
            animationData: videoSVG,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };

        return (
            <div className="home__web-hero">

                <React.Suspense fallback={<Spinner />}>
                    <HeroVideo />
                </React.Suspense>

                <div className="home__video-svg">
                    <Lottie options={defaultOptions}
                        isStopped={this.state.isStopped}
                        isPaused={this.state.isPaused}
                    />
                </div>

                <div className="home__hero-circle" />
                
                <div className="home__hero-messaging">
                    <h1 className="home__hero-heading">Media Made Easy</h1>
                    <h3 className="home__hero-subheading">A user-friendly space for media creation.</h3>
                </div>
            </div>
        )
    }
}
