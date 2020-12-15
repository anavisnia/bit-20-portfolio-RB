import { isValidFeature } from './isValidFeature.js';

describe('Blogeji atvejai', () => {
    test('', () => {
        expect(isValidFeature()).toEqual(false);
    })
    test('prigauna netinkamus tipus', () => {
        expect(isValidFeature(519)).toEqual(false);
        expect(isValidFeature('sdf')).toEqual(false);
        expect(isValidFeature(true)).toEqual(false);
        expect(isValidFeature(false)).toEqual(false);
        expect(isValidFeature([])).toEqual(false);
        expect(isValidFeature(null)).toEqual(false);
    })
    test('duotas teksto tipo nuotrauka', () => {
        expect(isValidFeature({img: 8451})).toEqual(false);
        expect(isValidFeature({img: true})).toEqual(false);
        expect(isValidFeature({img: false})).toEqual(false);
        expect(isValidFeature({img: [] })).toEqual(false);
        expect(isValidFeature({img: {} })).toEqual(false);
    })
    const longFile = 'a'.repeat(97) + '.jpg';
    test('duota tinkamo ilgio nuotrauka', () => {
        expect(isValidFeature({img: ''})).toEqual(false);
        expect(isValidFeature({img: 'a'})).toEqual(false);
        expect(isValidFeature({img: 'a.jp'})).toEqual(false);
        expect(isValidFeature({img: 'a.jpg'})).toEqual(false);
        expect(isValidFeature({img: 'a.jpg'})).toEqual(true);
        expect(isValidFeature({img: 'ahdbsdhsjsjadnsadjahdbsdhsjsjadnsadjahdbsdhsjsjadnsadjahdbsdhsjsjadnsadjahdbsdhsjsjadnsadjahdbsdhsjsjadnsadjahdbsdhsjsjadnsadj.jpg'})).toEqual(false);
    })
})