import React from 'react';
import './home.css';
import ComponentC from './C';
import ComponentD from './D';

export default function ComponentI() {
	return (
		<div className="componentI">
			<div className="header">
				<div>A컴포넌트</div>
				<ComponentC></ComponentC>
			</div>
			<ComponentD money="10,000,000"></ComponentD>
		</div>
	);
}
