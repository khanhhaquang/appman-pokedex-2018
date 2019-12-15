export * from './http';

export const getHp = (value = 0) => {
	if (value < 0) return 0;
	if (value > 100) return 100;
	return value - 0;
};

export const getStr = (value = 0) => {
	if (value * 50 > 100) return 0;
	return value * 50;
};

export const getWeak = (value = 0) => {
	if (value * 100 > 100) return 0;
	return value * 100;
};

export const getDamage = (attacks = []) => {
	return attacks.reduce((result, item) => result + (item.damage.match(/\d*/g)[0] - 0), 0);
};

export const getHappy = (hp = 0, attacks = [], weak = 0) => {
	const damage = getDamage(attacks);
	return Math.floor((hp / 10 + damage / 10 + 10 - weak) / 5);
};
