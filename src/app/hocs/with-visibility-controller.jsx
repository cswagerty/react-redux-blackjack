import React, { Component }  from 'react';

/*
	This function accepts a component and returns a 
	wrapped component that only renders if the visibility prop
	is set to true
*/

function withVisibilityController(WrappedComponent) {
	return class WithVisibilityController extends Component {
		constructor(props) {
			super(props);
		}

		render() {
			const { visible, ...passThroughProps } = this.props;
			// render wrapped component based on visible prop
			if (visible === false) {
				return null;
			}

			return(
				<WrappedComponent {...passThroughProps} />
			);
		}
	}
}

export default withVisibilityController;
