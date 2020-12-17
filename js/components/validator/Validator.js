class Validator {
    static isSelector(Text) {
        if (typeof text !== 'string' ||
            text === '') {
            return false;
        }
        return true;
    }

    static isArray(array) {
        if (!Array.isArray(array) ||
        array.length === 0) {
            return false;
        }
        return true;
    }
    static isObject(object) {
        if (typeof object !== 'object' ||
        Array.isArray(object) ||
         object === null) {
            return false;
        }
        return true;
    }
    static isImageFile(text) {
        const validExtension = ['png', 'jpg', 'gif', 'jpeg'];

        // pavadinimas.pletinys

        if (typeof text !== 'string' ||
        text.length < 5 ||
        text.length > 100 ||
        text[0] === '.' ||
        text[text.length-1 === '.']) {
            return false;
        }
        const parts = text.split('.');

        // isitikiname jog tinkama galune
        if (parts.length !==2) {
            return false;
        }
        if (!validExtension.includes(parts[1])) {
            return false;
        }
        
        //TODO: isitikaname jog tinkamas pavadinimas

        return true;
    }

    static isTitle(text) {
        if (typeof text !== 'string' ||
        text === '' ||
        text.length > 100) {
            return false;
        }

        //TODO: leidziami simboliai: raides, skaicia, tarpas

        return true;
    }
    static isHref(href) {
        if (typeof href !== 'string' ||
        href === '') {
            return false;
        }
    }
    static isTitle(text) {
        if (typeof text !== 'string' ||
        text === '' ||
        text.length > 100) {
            return false;
        }

        //TODO: leidziami simboliai: raides, skaicia, tarpas

        return true;
    }

    static isDescrription(text) {
        if (typeof text !== 'string' ||
        text === '' ||
        text.length > 1000) {
            return false;
        }

        //TODO: leidziami simboliai: raides, skaicia, tarpas, spec simboliai

        return true;
    }
}

export { Validator }