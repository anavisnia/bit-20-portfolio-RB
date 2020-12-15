import { isValidFeature } from "./isValidFeature";

describe('', () => {
    test('Prigauna neduotus abu parametrus', () => {
        expect(isValidinput()).toEqual(false);
    })
    test('Prigauna neduota antra parametra', () => {
        expect(isValidinput('body')).toEqual(false);
    })
    test('Prigauna netinkamo formato', () => {
        expect(isValidinput('body')).toEqual(false);
    })
})
describe('tikrinamas antro parametro formatas', () => {
    test('turi tureti dataa paramatra (object key)', () => {
        expect(isValidinput('body', {data: 541})).toEqual(false);
        expect(isValidinput('body', {data: 'jshds'})).toEqual(false);
        expect(isValidinput('body', {data: {}})).toEqual(false);
        expect(isValidinput('body', {data: true})).toEqual(false);
        expect(isValidinput('body', {data: false})).toEqual(false);
        expect(isValidinput('body', {data: null})).toEqual(false);
        expect(isValidinput('body', {data: [] })).toEqual(true);
    })
})