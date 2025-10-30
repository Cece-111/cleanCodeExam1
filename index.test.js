import{describe,expect, it} from 'vitest';
import {checkScore, diceGame} from './index.js';
import {roll5Dices} from './index.js';
import {diceRolls} from './index.js';
import { checkScore } from './index.js';

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
    it('should return a list of 10 dice rolls',()=> {
        const result = diceRolls(10);
        expect(result).toBeInstanceOf(Array);
        expect(result).toHaveLength(10);
        result.forEach((roll) => {
            expect(roll).toBeInstanceOf(Array);
            expect(roll).toHaveLength(5);   
            roll.forEach((value) => {
                expect(value).toBeGreaterThan(0);
                expect(value).toBeLessThan(7);
            });
        });
    });
    it.each([
        {diceRoll: [1, 2, 3, 4, 5], expectedScore: 15},
        {diceRoll: [3,5,8,6,4], expectedScore: 26},
        {diceRoll: [3,1,4,7,5], expectedScore: 20}
    ])('should return $expectedScore for $diceRoll',({diceRoll, expectedScore})=> {
        const result = checkScore(diceRoll);
        expect(result).toBe(expectedScore);
    });
});