import React, { Component } from 'react'
import Lottie from 'react-lottie';

// Components
import Spinner from '../../components/Spinner';

// SVGs
import { ReactComponent as ChevronArrow } from '../../assets/home/products/chevron-thin-down.svg';
import videoSVG from '../../assets/home/hero/video.json';

// Lazy Loads
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
                    <h1 className="home__hero-heading h1 h1 white">Media Made Easy</h1>
                    <h3 className="home__hero-subheading h3 h3 white l">A user-friendly space for media creation.</h3>
                </div>

                <div className="home__description-container">
                    <h2 className="home__studio-description h2 h2 white">A user-friendly space for media creation.</h2>
                </div>

                <div onClick={this.props.onProductsHandler} className="home__hero-arrow-container">
                    <h3 className="home__hero-arrow-heading h3 l">Our Products and Services</h3>
                    <ChevronArrow className="home__hero-arrow" />
                </div>
            </div>
        )
    }
}
