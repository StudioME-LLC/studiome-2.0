import * as actionTypes from './actionTypes';

// HOME PAGE BUTTONS
export const rentalButton = () => {
    return {
        type: actionTypes.RENTAL_BUTTON
    };
};

export const serviceButton = () => {
    return {
        type: actionTypes.SERVICE_BUTTON
    };
};

export const membershipsButton = () => {
    return {
        type: actionTypes.MEMBERSHIPS_BUTTON
    };
};