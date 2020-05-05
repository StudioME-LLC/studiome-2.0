import * as actionTypes from './actionTypes';

const initialState = {
    // Main Buttons
    rentalsButtonClass: 'button-2--active',
    servicesButtonClass: 'button-2',
    membershipsButtonClass: 'button-2',
    rentalToggle: true,
    servicesToggle: false,
    membershipsToggle: false,

    // Active Equipment Buttons
    activeEquipmentButton: '907'
}

const onRentalButton = (state = initialState, action) => {
    switch (action.type) {

		case actionTypes.RENTAL_BUTTON:
			return {
				...state,
                rentalsButtonClass: 'button-2--active',
                servicesButtonClass: 'button-2',
                membershipsButtonClass: 'button-2',
                rentalToggle: true,
                servicesToggle: false,
                membershipsToggle: false,
			}
		case actionTypes.SERVICE_BUTTON:
			return {
				...state,
                rentalsButtonClass: 'button-2',
                servicesButtonClass: 'button-2--active',
                membershipsButtonClass: 'button-2',
                rentalToggle: false,
                servicesToggle: true,
                membershipsToggle: false,
			}
		case actionTypes.MEMBERSHIPS_BUTTON:
			return {
				...state,
                rentalsButtonClass: 'button-2',
                servicesButtonClass: 'button-2',
                membershipsButtonClass: 'button-2--active',
                rentalToggle: false,
                servicesToggle: false,
                membershipsToggle: true,
            }
        case actionTypes.CAMERA_BUTTON:
			return {
				...state,
                activeEquipmentButton: '907'
            }
        case actionTypes.LIGHTING_BUTTON:
			return {
				...state,
                activeEquipmentButton: '965'
            }
        case actionTypes.AUDIO_BUTTON:
			return {
				...state,
                activeEquipmentButton: '963'
            }
            
        default: return state;
	}
}

export default onRentalButton;