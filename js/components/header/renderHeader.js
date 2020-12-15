import { isValidInput } from './isValidInput.js';
import { isValidLink } from './isValidLink.js';
/**
 * Navigacijos kurimas
 * @param {string} selector CSS like selektor, kaip rasti norima vieta komponento generavimui
 * @param {Array} data duomenys
 */
function renderHeader(selector, data) {
    // input validation
    if (!isValidInput(selector, data)) {
        return false;
    }
    // logic
    const DOM = document.querySelector(selector);
    if (!DOM) {
        return false;
    }

    let HTML = '';
    for (let { link, name } of data) {
        if (isValidLink(link, name)) {
            HTML += `<a href="${link}">${name}</a>`;
        }   
    }
    // for (let { link, name } of data) {
    //     HTML += `<a href="${link}">${name}</a>`;
    // }

    //post logic vaalidation
    if (HTML === '') {
        return false;
    }
    // return
    DOM.innerHTML = HTML;
    return true;
}

export { renderHeader };