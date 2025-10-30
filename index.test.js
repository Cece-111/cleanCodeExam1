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
        {diceRoll: [5,1,3,4,4], expectedScore: 17},
        {diceRoll: [5,1,5,7,5], expectedScore: 28},
        {diceRoll: [5,1,1,1,1], expectedScore: 35},
        {diceRoll: [3,3,3,3,3], expectedScore: 50},
        {diceRoll: [6,2,6,2,6], expectedScore: 30},
        {diceRoll: [5,3,1,2,4], expectedScore: 40},
    ])('should return $expectedScore for $diceRoll',({diceRoll, expectedScore})=> {
        const result = checkScore(diceRoll);
        expect(result).toBe(expectedScore);
    });
    it('should return 85 for [[4,3,4,1,4],[3,5,2,6,4],[4,1,5,3,4]]',()=> {
        const rolls = [
            [4, 3, 4, 1, 4],
            [3, 5, 2, 6, 4],
            [4, 1, 5, 3, 4]
        ];
        const result = diceGame(rolls);
        expect(result).toBe(85);
    });
});