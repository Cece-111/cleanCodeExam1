import{describe,expect, it} from 'vitest';
import {diceGame} from './index.js';
import {roll5Dices} from './index.js';

describe('diceGame',()=> {
    it('should return an array of 5 numbers between 1 and 6',()=> {
        const result = roll5Dices();
        expect(result).toBeInstanceOf(Array);
        expect(result).toHaveLength(5);
        result.forEach((value) => {
            expect(value).toBeGreaterThan(0);
            expect(value).toBeLessThan(7);
        });
    });
});