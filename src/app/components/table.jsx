import React from 'react';

const Table = props => {

	if (!props.visible) {
		return null;
	}

	return (
		<section className="table"></section>
	);
}

export default Table;
