const palindrome = require('../lib/palindrome');

describe('palindrome', () => { 
    describe('when input is not a string', () => {
        it('should return false', () => {
            expect(palindrome(12)).toEqual(false);
        });
    });
    describe('when input has length 1', () => {
        it('should return true', () => {
            expect(palindrome('x')).toEqual(true);
        });
    });
    describe('when input IS a palindrome', () => {
        describe('and is all lower case and contains no spaces', () => {
            it('should return true', () => {
                expect(palindrome('racecar')).toEqual(true);
            });
        });
        describe('and is all lower case and contains spaces', () => {
            it('should return true', () => {
                expect(palindrome('never odd or even')).toEqual(true);
            });
        });
        describe('and is mixed case and contains no spaces', () => {
            it('should return true', () => {
                expect(palindrome('raceCar')).toEqual(true);
            });
        });
        describe('and is mixed case and contains spaces', () => {
            it('should return true', () => {
                expect(palindrome('Never Odd Or even')).toEqual(true)
            });
        });
    });
    describe('when input is NOT a palindrome', () => {
        it('should return false', () => {
            expect(palindrome('hello')).toEqual(false)
        });
    });
});
