export function getScoresFromCards(cards) {
    const cardNames = cards.map(card => card.name);
    return calculateScoresFromCardNames(cardNames);
}

const calculateScoresFromCardNames = (cardNames=[]) => {
    // calculate all possible scores the hand could have
    // cardNames = ["3", "5", "A", "A"] -> [10, 20]
    
    const nonNumericCardValues = {
        "J": 10,
        "Q": 10,
        "K": 10,
        "A": [1,11]
    };

    let cardValues = cardNames.map(cardName => {
        // if non-numeric card, then add the appropriate value
        // if numeric then just add the card name as an integer
        return nonNumericCardValues[cardName] || parseInt(cardName);
    });

    return getScoresFromCardValues(cardValues)
}

const getScoresFromCardValues = cardValues => {

    let unfilteredScores = getAllPossibleScores(cardValues);
    let uniqueScores = removeDuplicateScores(unfilteredScores);
    return removeInvalidScores(uniqueScores);

}

const getAllPossibleScores = cardValues => {
    // return an array of all possible socores, including duplicates
    // [3, [1,11], [1,11]] => [5, 15, 15, 25]

    const possibleScores = cardValues.reduce((accArray, value, index) => {

        if (Array.isArray(value)) {
            // if value is an array create two new values for each value in accArray
            // one that adds 1 and another that adds 11 to get both possible scores for aces
            let newArray = [];
            
            accArray.forEach(accValue => {
                value.forEach(val => newArray.push(val + accValue))    
            });
            return newArray;
        }
        
        accArray = accArray.map(accValue => accValue + value);
        return accArray;
    }, [0]);

    return possibleScores;
}


const removeDuplicateScores = scores => {
    // remove duplicate elements
    let uniqueElements = [];
    
    scores.forEach(value => {
        if (uniqueElements.includes(value)) {
            return;
        }

        uniqueElements.push(value);
    });

    return uniqueElements;
}

const removeInvalidScores = scores => {
    // If there are multiple score options (because of an ace)
    // Remove the options that are greater than 21 if there are scores that are 21 or less

    // if a score is 21, it is the only valid score because it is the best possible hand
    if (scores.includes(21)) {
        return [21];
    }

    let validScores = scores.filter(score => score <= 21);
    
    // if there are no score options under 21, add the lowest score over 21
    if (validScores.length === 0) {
        validScores[0] = scores[0];
    }

    return validScores;
}