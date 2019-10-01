import * as actionTypes from './actionTypes';

const initialState = {
    // Main Buttons
    rentalsButtonClass: 'home__products-rentals-button--active',
    servicesButtonClass: 'home__products-services-button',
    membershipsButtonClass: 'home__products-memberships-button',
    rentalToggle: true,
    servicesToggle: false,
    membershipsToggle: false,
}

const onRentalButton = (state = initialState, action) => {
    switch (action.type) {

		case actionTypes.RENTAL_BUTTON:
			return {
				...state,
                rentalsButtonClass: 'home__products-rentals-button--active',
                servicesButtonClass: 'home__products-services-button',
                membershipsButtonClass: 'home__products-memberships-button',
                rentalToggle: true,
                servicesToggle: false,
                membershipsToggle: false,
			}
		case actionTypes.SERVICE_BUTTON:
			return {
				...state,
                rentalsButtonClass: 'home__products-rentals-button',
                servicesButtonClass: 'home__products-services-button--active',
                membershipsButtonClass: 'home__products-memberships-button',
                rentalToggle: false,
                servicesToggle: true,
                membershipsToggle: false,
			}
		case actionTypes.MEMBERSHIPS_BUTTON:
			return {
				...state,
                rentalsButtonClass: 'home__products-rentals-button',
                servicesButtonClass: 'home__products-services-button',
                membershipsButtonClass: 'home__products-memberships-button--active',
                rentalToggle: false,
                servicesToggle: false,
                membershipsToggle: true,
            }
            
        default: return state;
	}
}

export default onRentalButton;