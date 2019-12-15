import React from 'react';
import Styled from './index.styled';
import ProgressBar from '../progressBar';
import { getHp, getStr, getWeak, getHappy } from '../../../../helpers';
import CuteImg from '../../../cuteImg';

const Content = props => {
	const { name, hp, attacks = [], weaknesses = [] } = props;

	const hpPercentage = getHp(hp);
	const strPercentage = getStr(attacks.length);
	const weakPercentage = getWeak(weaknesses.length);
	const happyLevel = getHappy(hpPercentage, attacks, weaknesses.length) || 0;

	const renderHappiness = () => {
		return [...Array(happyLevel)].map((item, index) => <CuteImg key={index} />);
	};

	return (
		<Styled className='content'>
			<p className='name'>{name}</p>
			<ProgressBar label='HP' percentage={hpPercentage} />
			<ProgressBar label='STR' percentage={strPercentage} />
			<ProgressBar label='WEAK' percentage={weakPercentage} />
			<div className='happy'>{renderHappiness()}</div>
		</Styled>
	);
};

export default Content;
