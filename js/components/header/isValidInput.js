import { Validator } from '../validator/Validator.js';

function isValidInput(selector, headerData) {
    // if (typeof selector !== 'string') {
    //     return false;
    // }
    if (!Validator.isSelector(selector)) {
        return false;
    }


    console.log(Validator.isSelector(selector));

    return true;
}

export { isValidInput }