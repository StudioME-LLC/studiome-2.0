import React from 'react';
import { graphql } from 'react-apollo';

// Queries
import { addImpression } from '../../../analytics/queries';

// Photos
import Package25 from '../../../assets/home/products/memberships/25membership-final.png'
import Package50 from '../../../assets/home/products/memberships/50membership-final.png'

class ProductMemberships extends React.Component {

    componentDidMount() {
        this.props.addImpression({
			variables: {
				date: new Date().toISOString().slice(0, 10),
				productId: "5e5fc3405393db0004e43a69"
			}
		})
    }

    impressProMembership = () => {
        this.props.addImpression({
			variables: {
				date: new Date().toISOString().slice(0, 10),
				productId: "5e5fc35c5393db0004e43a6a"
			}
		})
    }

    impressPremiiumMembership = () => {
        this.props.addImpression({
			variables: {
				date: new Date().toISOString().slice(0, 10),
				productId: "5e5fc3625393db0004e43a6c"
			}
		})
    }

    render() {
        return (
            <div className="home__products-memberships">
                <h2 className="home__products-memberships-heading h2 l">Memberships</h2>
                <div className="home__products-memberships-border" />
    
                <a
                    onClick={this.impressProMembership}
                    target="_blank" rel="noopener noreferrer"
                    className="home__products-membersip-container-1"
                    href="https://studiome.me/product/25mo-25off-membership/"
                >
                    <img
                        src={Package25}
                        alt="25% for $25 Membership"
                        className="home__products-memberships-package"
                    />
                </a>
                <h3 className="home__products-memberships-name-1 h3 teal-dark">Pro Membership</h3>
                <p className="home__products-memberships-package-description-1 p-m b">25% off for $25 a month (3 months due on sign up)</p>
    
                <a
                    onClick={this.impressPremiiumMembership}
                    target="_blank" rel="noopener noreferrer"
                    className="home__products-membersip-container-2"
                    href="https://studiome.me/product/50mo-50off-membership/"
                >
                        
                    <img
                        src={Package50} alt="50% for $50 Membership"
                        className="home__products-memberships-package"
                    />
                </a>
    
                <h3 className="home__products-memberships-name-2 h3 teal-dark">Premium Membership</h3>
                <p className="home__products-memberships-package-description-2 p-m b">50% off for $50 a month (3 months due on sign up)</p>
    
    
                <p className="home__products-get-started p-l">Click <a
                    className="home__products-get-started-link p-l b teal"
                    href="https://studiome.me/get-started/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >here
                </a> to sign up for our free membership.</p>
    
                <p className="home__products-memberships-feedback p-l">Want to give us feedback on our membership plans? <a
                    href="https://forms.gle/9Xor9rmRvPSFWhRA8"
                    rel="noopener noreferrer" target="_blank"
                    className="home__products-feedback-link p-l b teal"
                    >
                        Click Here
                    </a>
                </p>
            </div>
        )
    }
}

export default graphql(addImpression, { name: "addImpression" })(ProductMemberships);