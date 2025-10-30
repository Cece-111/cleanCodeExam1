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
    const VALEUR_BRELAN=28;
    const VALEUR_CARRE=35;
    const VALEUR_FULL=30;
    const VALEUR_GRANDE_SUITE=40;
    const VALEUR_YAMS=50;

    let score = 0;
    const counts = {}; 
    for (let i = 0; i < diceRoll.length; i++) {
        const value = diceRoll[i];
        counts[value] = (counts[value] || 0) + 1;
    }

    let maxCount = 0;
    const occurrences = Object.values(counts);
    for (let count of occurrences) { 
        if (count > maxCount) maxCount = count;
    }

    if (maxCount === 5) {
        return VALEUR_YAMS;
    }

    const uniqueValues = Object.keys(counts).map(Number);
    if (uniqueValues.length === 5) {
        const min = Math.min(...uniqueValues);
        const max = Math.max(...uniqueValues);
        if (max - min === 4) return VALEUR_GRANDE_SUITE;
    }

    if (maxCount === 4){
        return VALEUR_CARRE;
    }

    if (maxCount === 3){
        if (occurrences.includes(2)) {
            return VALEUR_FULL;
        }
        return VALEUR_BRELAN;
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
