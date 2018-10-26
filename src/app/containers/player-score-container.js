import { connect } from 'react-redux';
import withVisibilityController from '../hocs/with-visibility-controller.jsx';

import PlayerScore from '../components/player-score.jsx';

const mapStateToProps = (store, ownProps) => {
    const { player, table } = store;

    const visibleStatuses = ['AFTER_CARDS_DEALT'];

    return {
        visible: visibleStatuses.includes(table.status),
        score: getDisplayedScore(player.id, [...table.players])
    }
}

const getDisplayedScore = (playerId, players) => {
    const player = players.find(player => playerId === player.id);
    // make a list of card names since suit doesn't affect score
    const cards = player.cards || [];
    const cardNames = cards.map(card => card.name);
    const score = calculateScore(cardNames);
    return formatScore(score, cardNames);
}

const calculateScore = (cards=[]) => {
    let calculatedScore = 0;
    const faceCards = ["J", "Q", "K"];
    cards.forEach(card => {

        if (faceCards.includes(card)) {
            // face cards are worth 10 points
            calculatedScore += 10;
            return;
        }

        if (card === "A") {
            calculatedScore += 11

            return;
        }

        calculatedScore += parseInt(card);
    });

    // if value of 11 puts player over 21, make ace worth 1 point
    if (cards.includes("A") && calculatedScore > 21) {
        calculatedScore -= 10;
    }

    return calculatedScore;
}

const formatScore = (calculatedScore, cardNames) => {
    // if cards includes an ace, show both potential scores
    if (calculatedScore === 21) {
        return cardNames.length === 2 ? 'Blackjack!' : '21!';
    }

    if (calculatedScore > 21) {
        return `${calculatedScore} - BUST!`;
    }

    if (cardNames.includes("A")) {
        return `${calculatedScore - 10}/${calculatedScore}`;
    }

    return calculatedScore.toString();
}

const withConnection = connect(
    mapStateToProps
);

export default withConnection(withVisibilityController(PlayerScore));

