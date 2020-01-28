import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Spinner from '../../../components/Spinner';
import EquipmentSelected from '../../../components/Equipment/EquipmentSelected';

class Equipment extends Component {

    state = {
        products: [],
        selected: false,
        selectedProduct: null,
        isLoading: true,
        classActive: '907'
    }

    componentWillMount() {
        window.scroll({
            top: 0,
        });
    }

	componentDidMount() {
        this.switchEquipment(this.props.activeEquipmentButton);
        this.setState({
            ...this.state,
            classActive: this.props.activeEquipmentButton
        })
    }

    switchEquipment = (selected) => {
        this.setState({
            ...this.state,
            isLoading: true,
        })
        return fetch(`https://studiome.me/wp-json/wp/v2/pages/${selected}`)
		.then(response => response.json())
		.then(responseJson => {
            let productsArray = responseJson.acf.product_blocks;
            let products = [];

            for (let i = 0; i < productsArray.length; i++) {
                products.push(productsArray[i])
            }

            this.setState({
                ...this.state,
                products: products,
                isLoading: false,
                classActive: selected
            })
        })
    }

    onProductSelect = (index) => {
        this.setState({
            ...this.state,
            selected: !this.state.selected,
            index: index,
            selectedProduct: this.state.products[index],
        })

        window.scroll({
            top: 0,
        });
    }

    onPreviousButton = () => {
        this.setState({
            ...this.state,
            selectedProduct: this.state.products[this.state.index - 1],
            index: this.state.index - 1,
        })
    }

    onNextButton = () => {
        this.setState({
            ...this.state,
            selectedProduct: this.state.products[this.state.index +1 ],
            index: this.state.index + 1,
        })
    }

    onBackButton = () => {
        this.setState({
            ...this.state,
            selected: !this.state.selected,
        })

        window.scroll({
            top: 0,
        });
    }
    
    render() {
        let content = <div style={{gridColumn: '1 / -1'}}><Spinner /></div>
        
        // Equipment List
        if (!this.state.isLoading) {
            content = this.state.products.map((product, index) => (
            <div className="equipment__component" onClick={this.onProductSelect.bind(this, index)} key={index}>
                <div className="equipment__component-photo" style={{backgroundImage: `url(${product.photo})`}} alt="Equipment-Photo" />
                <h1 className="equipment__component-heading">{product.title}</h1>
            </div>
        ))}

        // Equipment Details
        if (this.state.selected) {
            content = <EquipmentSelected
                onBackButton={this.onBackButton}
                selectedProduct={this.state.selectedProduct}
                index={this.state.index}
                products={this.state.products}
                onPreviousButton={this.onPreviousButton}
                onNextButton={this.onNextButton}
            />
        }

        return (
            // Main Page
            <div className="equipment">
                <div className="equipment__banner" />
                <div className="equipment__banner-container">
                    <h1 className="equipment__heading">Equipment</h1>
                    <div className="equipment__border" />
                </div>
                    <div className="equipment__container">
                        {!this.state.selected
                            ? <React.Fragment>
                            <button
                                className={this.state.classActive === '907' 
                                    ? 'equipment__camera-button--active' :
                                    'equipment__camera-button'}
                                onClick={this.switchEquipment.bind(this, '907')}
                            >Cameras</button>
                            <button
                                className={this.state.classActive === '965' 
                                ? 'equipment__lighting-button--active' 
                                : 'equipment__lighting-button'}
                                onClick={this.switchEquipment.bind(this, '965')}
                            >Lighting</button>
                            <button
                                className={this.state.classActive === '963' 
                                ? 'equipment__audio-button--active' 
                                : 'equipment__audio-button'}
                                onClick={this.switchEquipment.bind(this, '963')}
                            >Audio</button>
                            </React.Fragment>
                            : null
                        }

                        <div className={!this.state.selected 
                            ? 'equipment__component-container' 
                            : 'equipment__component-container-selected'}
                        >
                            {content}
                        </div>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
	return {
        activeEquipmentButton: state.activeEquipmentButton,
	};
};

export default connect( mapStateToProps )(Equipment);
