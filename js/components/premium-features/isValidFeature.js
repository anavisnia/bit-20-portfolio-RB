import { Validator } from "../validator/Validator";

function isValidFeature(feature) {
    if (!Validator.isObject(feature)) {
        // console.error('ERROR...');
        return false;
    }
    if (!Validator.isImageFile(feature.img)) {
        // console.error('ERROR...');
        return false;
    }
    if (!Validator.isTitle(feature.title)) {
        return false;
    }
    if (!Validator.isDescrription(feature.description)) {
        return false;
    }

    return true;
}

export { isValidFeature }