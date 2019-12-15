import React from 'react';
import Styled from './index.styled';

const ProgressBar = props => {
	const { className, label, percentage = 0 } = props;

	return (
		<Styled className={`progress ${className}`} percentage={percentage}>
			<span className='label'>{label}</span>
			<div className='bar'>
				<div className='percentage'></div>
			</div>
		</Styled>
	);
};

export default ProgressBar;
