import React, { Component } from 'react';

class DealerCommander extends Component {

	render() {
		const { id, turnActive, scores, triggerDealerHit, triggerDealerStay } = this.props;

		if (!turnActive) {
			// dealer should only play during their turn
			return null;
		}

		if(this.shouldHit(scores)) {
			triggerDealerHit(id);
			return null;
		}

		// if dealer has a score of 17 or more, they are required to stay
		triggerDealerStay(id);

		// DealerCommander is an AI controller so no HTML is rendered
		return null;
	}

	shouldHit(scores) {
		// dealer should only hit if they don't have a score of 17 or more
		return !scores.some(score => score >= 17);
	}
}

export default DealerCommander;