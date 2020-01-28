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

// Equipment Category Buttons
export const cameraButton = () => {
    return {
        type: actionTypes.CAMERA_BUTTON
    };
};

export const lightingButton = () => {
    return {
        type: actionTypes.LIGHTING_BUTTON
    };
};

export const audioButton = () => {
    return {
        type: actionTypes.AUDIO_BUTTON
    };
};