export const roll5Dices = () => {
    const listeDes = [];
    for (let i = 0; i < 5; i++) {
        listeDes.push(Math.floor(Math.random() * 6) + 1);
    }
    return listeDes;
};

export const diceGame=(input)=> {
    return;
};
