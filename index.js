export const roll5Dices = () => {
    const diceRoll = [];
    for (let i = 0; i < 5; i++) {
        diceRoll.push(Math.floor(Math.random() * 6) + 1);
    }
    return diceRoll;
};

export const diceRolls =(rollsNumber)=>{
    const diceRolls = [];
    for (let i = 0; i < rollsNumber; i++) {
        diceRolls.push(roll5Dices());
    }
    return diceRolls;
}

export const checkScore = (diceRoll) => {
    let score = 0;
    const counts = {}; 
    for (let i = 0; i < diceRoll.length; i++) {
        const value = diceRoll[i];
        counts[value] = (counts[value] || 0) + 1;
    }
    for (const val in counts) {
        if (counts[val] === 5) {
            score = 50;
            return score;
        }
    }
    if (counts[1] === 4) {
        score = 35;
        return score;
    }
    if (counts[1] === 3) {
        score = 28;
        return score;
    }

    for (let i = 0; i < diceRoll.length; i++) {

        score += diceRoll[i];
    }
    return score;
}

export const diceGame=(diceRolls)=> {
    let totalScore = 0;
    for (let i = 0; i < diceRolls.length; i++) {
        totalScore += checkScore(diceRolls[i]);
    }
    return totalScore;
};
