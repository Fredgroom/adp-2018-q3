const minimumPositiveInteger = require('../lib/minimumPositiveIntegers');


describe('minimumPositiveInteger', () => {
    describe('when parameter is not an array', () => {
        it('should return undefined', () => {
            expect(minimumPositiveInteger(9999)).not.toBeDefined;
        });
    });
    describe('when parameter is empty array', () => {
        it('should return undefined', () => {
            expect(minimumPositiveInteger([])).not.toBeDefined;
        });
    });
    describe('when paramenter is an array', () => {
        describe('when there are no missing positive integers from the array' , () => {
            it('should return undefined', () => {
                expect(minimumPositiveInteger([2,4,3,1])).not.toBeDefined;
            });
        });
        describe('when there is one missing positive integer', () => {
            it('should return the missing positive integer', () => {
                expect(minimumPositiveInteger([1, 3, 4])).toEqual(2);
            });
        });
    });
});