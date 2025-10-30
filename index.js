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
    for (let i = 0; i < diceRoll.length; i++) {
        score += diceRoll[i];
    }
    return score;
}

export const diceGame=(diceRolls)=> {
    return;
};
