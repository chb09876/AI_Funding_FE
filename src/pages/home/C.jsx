import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../image/cup.png';

export default function ComponentC() {
	return (
		<div>
			<div>
				<Link to='/somePage'>
					<div className="btnContainer">
						<img className="btn" src={icon}/>
						<div className="btnStyle"></div>
					</div>
				</Link>
			</div>
		</div>
	);
} 