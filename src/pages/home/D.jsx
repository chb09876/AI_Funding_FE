import React from 'react';
import './home.css';

export default function ComponentD(props) {
	return (
		<div className="componentD">
			<div id="money">{props.money}</div>
			<div id="unit">원</div>
		</div>
	);
} 