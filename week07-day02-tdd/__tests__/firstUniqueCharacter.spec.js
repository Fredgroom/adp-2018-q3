const firstUniqueCharacter = require('../lib/firstUniqueCharacter');

describe('firstUniqueCharacter', () => {

    describe('when input is not a string', () => {
        it('should return undefined', () => {
            expect(firstUniqueCharacter(1)).toEqual(undefined);
        });
    });

    describe('when a string is one letter long', () => {
        it('should return string', () => {
            expect(firstUniqueCharacter('a')).toEqual('a');
        });
    });

    describe('when a string has length 2', () => {

        describe('and both letters are different', () => {
            it('should return first letter', () => {
                expect(firstUniqueCharacter('ab')).toEqual('a');
            });
        });

        describe('and both letters are the same', () => {
            it('should return undefined', () => {
                expect(firstUniqueCharacter('aa')).toEqual(undefined);
            });
        });

    });

    describe('when a string has all unique letters', () => {
        it('should return first letter', () => {
            expect(firstUniqueCharacter('abcde')).toEqual('a');
        })

    });

    describe('when a string has one unique letter', () => {
        it('should return the unique letter', () => {
            expect(firstUniqueCharacter('aaaabbbbcddddeee')).toEqual('c');
        })
    });

    describe('when a string has multiple unique letters', () => {
        it('should return the first unique letter', () => {
            expect(firstUniqueCharacter('abcdefg')).toEqual('a');
        })
    });
    describe('when string has different letters, all repeating', () => {
        it('should return undefined', () => {
            expect(firstUniqueCharacter('aaaaaaabbbbbbbddddddd')).not.tobedefined;
        })
    })
});